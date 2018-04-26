import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/Observable';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

import { Widget } from './widget';

@Injectable()

export class MainPageService {

  IDBTransaction :any  = window.IDBTransaction || window.webkitIDBTransaction || window.msIDBTransaction;
  indexedDB : any = window.indexedDB || window.mozIndexedDB || window.webkitIndexedDB || window.msIndexedDB;
  baseName :string = "wetherBase";
	storeName :string	= "wetherStore";
  url : string = "http://api.openweathermap.org/data/2.5/weather?q=";
  key : string = "&APPID=1cad821d83d79985ccf382aaa195ade5";
  db: any;
  wetherData : Widget[] | any = [];

  constructor(private http: HttpClient) { }

  private wetherSource  = new BehaviorSubject<any>(this.wetherData);
  currentWetherData = this.wetherSource.asObservable();

  refreshWetherData(newData):void{
    this.wetherSource.next(newData);
  }

  unsubscribeWetherData(): void{
    this.wetherSource.complete();
  }

  dbOpen(): Promise<any> {
    return new Promise((res, rej) => {
      const request = this.indexedDB.open(this.baseName , 1);
      request.onsuccess = () => {
        this.db = request.result;
        res(this.db)
      }

      request.onerror = (err) => {
        rej(err)
      }

      request.onupgradeneeded = (event) =>{
        this.db  = event.target.result;

        if(!this.db.objectStoreNames.contains(this.storeName)){
          this.db.createObjectStore(this.storeName, { keyPath: "name" });
        }
        res(this.db)
      }

    })

  }

  addWidget (city,cb,errCb): void {
    this.http.get(`${this.url}${city}${this.key}`)
      .subscribe((data)=>{
        const store : any = this.db.transaction([this.storeName], "readwrite")
        .objectStore(this.storeName)
        .add(data);
        store.onsuccess = () => {
          this.getWidgets();
          cb();
        }
        store.onerror = (err) => {
          errCb(err.error.message)
        }

    },
        (err)=>{errCb(err.error.message)}
      )
  }

  getWidgets() : Promise<any> {
    return new Promise((response, rej) => {
      const store :any = this.db.transaction([this.storeName], "readwrite")
        .objectStore(this.storeName)
        .getAll();

      store.onsuccess = () => {
        console.log(store.result);
        this.refreshWetherData(store.result);
      }

      store.onerror = (err) => {
        console.log(err);
      }
    })
  }

  deleteWidget(city) : void{
    const store : any = this.db.transaction([this.storeName], "readwrite")
      .objectStore(this.storeName)
      .delete(city);

    store.onsuccess = () => {
      this.getWidgets();
    }

    store.onerror = (err) => {
      console.log(err);
    }
  }

  refreshWidget(city) : void{
    this.http.get(`${this.url}${city}${this.key}`)
      .subscribe((data)=>{
        const store : any = this.db.transaction([this.storeName], "readwrite")
          .objectStore(this.storeName)
          .put(data);

        store.onsuccess = () => {
          this.getWidgets();
        }

        store.onerror = (err) => {
          console.log(err);
        }

      })
  }

}
