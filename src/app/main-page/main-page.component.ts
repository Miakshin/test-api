import { Component, OnInit, OnDestroy} from '@angular/core';
import { MainPageService } from './main-page.service';
import { OnChanges } from '@angular/core';

import {Widget} from './widget';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  widgets : Widget[];
  inputVal : string;
  filteredWidgets : Widget[];
  filterVal: string;
  // flag: string;
  // countries : string[] =[];

  constructor( private service : MainPageService ) {
    this.inputVal = "";
    this.filterVal = "";
  }

  ngOnInit() {
    this.service.currentWetherData
      .subscribe((widgets) => {
        this.widgets = widgets;
        this.filterData();
      })
    this.service.dbOpen()
      .then(()=>{
        this.getData()
      })
      .catch(console.log)
  }

  ngOnDestroy():void{
    this.service.unsubscribeWetherData()
  }

  getData() :void {
    this.service.getWidgets()
  }

  addCity(): void{
    this.service.addWidget(this.inputVal,
      ()=>{
      this.inputVal = ""},
      this.printErr)
  }

  deleteCity(city):void{
    this.service.deleteWidget(city)
  }

  refreshCity(city): void{
    this.service.refreshWidget(city);
  }

  // getCities(data){
  //   data.reduce((acum,curr)=>{
  //     if(acum.indexOf(curr.sys.country) === -1){
  //       return [...acum,curr]
  //     }
  //   },[])
  // }

  onChangeSearch(e){
    this.filterData();
  }

  filterData():void{
    if(this.filterVal.length < 0 ){
      this.filteredWidgets= this.widgets
    }else{
      const regExp : RegExp = new RegExp(this.filterVal, "i");
      this.filteredWidgets= this.widgets.filter((widget)=> {
        return widget.name.search(regExp) === -1 ? false : true
      })
    }
  }

  printErr(text){
    if(!document.querySelector(".err")){
      let div = document.createElement("div");
      const target = document.querySelector(".header");

      div.className = "err";
      div.innerHTML = text;
      target.insertBefore(div, document.querySelector(".title"));

      setTimeout(()=>{
        target.removeChild(div)
      },3000)
    }
  }

}
