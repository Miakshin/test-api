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

  addCity(city){
    this.service.addWidget(city);
  }

  ngOnInit() {
    this.service.dbOpen()
      .then(console.log)
      .then(()=>{
        this.service.getWidgets()
          .then((widgets)=>{
            this.widgets = widgets || []
          })
    })
  }

}
