import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

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

  constructor(private http: HttpClient) { }

  dbOpen(): Promise {
    return new Promise((res, rej) => {
      const request = this.indexedDB.open(this.baseName , 10);
      request.onsuccess = () => {
        this.db = request.result;
        res(this.db)
      }

      request.onerror = (onerror) => {
        rej(err)
      }

      request.onupgradeneeded = (event) =>{
        this.db  = event.target.result;

        if(!this.db.objectStoreNames.contains(this.storeName)){
          this.db.createObjectStore(this.storeName, { keyPath: "id", autoIncrement : true });
        }
        res(this.db)
      }

    }

  }

  addWidget (city): Widget {
    this.http.get(`${this.url}${city}${this.key}`)
      .subscribe((data)=>{
        const store : any = this.db.transaction([this.storeName], "readwrite")
        .objectStore(this.storeName)
        .add(data);
        store.onsuccess = () => {
          console.log(this.db)
        }
        store.onerror = (err) => {
          console.log(err)
        }

      })
  }

  getWidgets() : Promise{
    return new Promise((response, rej) => {
      const store :any = this.db.transaction([this.storeName], "readwrite")
        .objectStore(this.storeName)
        .getAll();
      store.onsuccess = () => {
        response(store.result)
      }
      store.onerror = (err) => {
        console.log(err)
      }
    )
  }

}
