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

  constructor( private service : MainPageService ) {
    this.inputVal = ""
  }

  ngOnInit() {
    this.service.currentWetherData
      .subscribe((widgets) => {
        this.widgets = widgets
      })
    this.service.dbOpen()
      .then(()=>{
        this.getData()
      });
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
      this.inputVal = ""})
  }

  deleteCity(city):void{
    this.service.deleteWidget(city)
  }

  refreshCity(city): void{
    this.service.refreshWidget(city);
  }

}
