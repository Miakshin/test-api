import { Component, Input, OnInit } from '@angular/core';
import { DecimalPipe } from '@angular/common';

import { MainPageService } from '../main-page.service';
import {Widget} from '../widget';

@Component({
  selector: 'app-main-page-widget',
  templateUrl: './main-page-widget.component.html',
  styleUrls: ['./main-page-widget.component.css']
})
export class MainPageWidgetComponent implements OnInit{

  @Input() data: Widget;
  temperature: number;
  transformValue: string;

  constructor( private service : MainPageService ) {}

   ngOnInit(): void {
     this.temperature = this.getCorrectTemperature();
     this.getTransformString();
   }

  deleteCity(city):void{
    this.service.deleteWidget(city)
  }

  refreshCity(city): void{
    this.service.refreshWidget(city);
  }

  getCorrectTemperature():number{
    const ziroCelsFromKelvin = 273;
    return this.data.main.temp - ziroCelsFromKelvin;
  }

  getTransformString() :void{
    this.transformValue = `rotate(${this.data.wind.deg}deg)`
  }


}
