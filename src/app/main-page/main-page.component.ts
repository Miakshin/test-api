import { Component, OnInit, OnDestroy} from '@angular/core';
import { MainPageService } from './main-page.service';

import {Widget} from './widget';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  widgets : Widget[];
  inputVal : string;
  filterVal: string;

  constructor( private service : MainPageService ) {
    this.inputVal = "";
    this.filterVal = "";
  }

  ngOnInit() {
    this.service.currentWetherData
      .subscribe((widgets) => {
        this.widgets = widgets;
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
    if(this.checkCityInWidgets(this.inputVal)){
      this.printErr(" This city is already added")
    }else{
      this.service.addWidget(this.inputVal,
        ()=>{
        this.inputVal = ""},
        this.printErr)
    }
  }

  checkCityInWidgets(city: string): boolean{
    const serchinCity = city.toLowerCase();
    const result =  this.widgets.findIndex((widget)=> {
      return widget.name.toLowerCase() === serchinCity ?
        true :
        false
    });
    return result === -1 ?  false : true
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
