import { Component, OnInit } from '@angular/core';
import{ MainPageService } from './main-page.service';

import {Widget} from './widget';

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {

  widgets : Widget[];

  constructor( private service : MainPageService ) { }

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

  getData() :void {
    this.service.getWidgets()
  }

  addCity(city): void{
    this.service.addWidget(city)
  }

  deleteCity():void{
    this.service.deleteWidget()
  }

  refreshCity(): void{

  }

}
