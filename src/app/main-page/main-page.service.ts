import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

import { Widget } from './widget';

@Injectable()

export class MainPageService {

  url : string = "http://api.openweathermap.org/data/2.5/weather?q=";
  key : string = "&APPID=1cad821d83d79985ccf382aaa195ade5";

  constructor(private http: HttpClient) { }

  getWidgets (): Widget[]{
    return(
      [
        {
          "coord": {
              "lon": 30.52,
              "lat": 50.43
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "base": "stations",
          "main": {
              "temp": 287.49,
              "pressure": 1012,
              "humidity": 54,
              "temp_min": 287.15,
              "temp_max": 288.15
          },
          "visibility": 10000,
          "wind": {
              "speed": 4,
              "deg": 160
          },
          "clouds": {
              "all": 0
          },
          "dt": 1522927800,
          "sys": {
              "type": 1,
              "id": 7358,
              "message": 0.0171,
              "country": "UA",
              "sunrise": 1522898697,
              "sunset": 1522946223
          },
          "id": 703448,
          "name": "Kiev",
          "cod": 200
      },
      {
          "coord": {
              "lon": 36.23,
              "lat": 49.99
          },
          "weather": [
              {
                  "id": 800,
                  "main": "Clear",
                  "description": "clear sky",
                  "icon": "01d"
              }
          ],
          "base": "stations",
          "main": {
              "temp": 289.15,
              "pressure": 1018,
              "humidity": 41,
              "temp_min": 289.15,
              "temp_max": 289.15
          },
          "visibility": 10000,
          "wind": {
              "speed": 4,
              "deg": 180
          },
          "clouds": {
              "all": 0
          },
          "dt": 1522933200,
          "sys": {
              "type": 1,
              "id": 7355,
              "message": 0.0022,
              "country": "UA",
              "sunrise": 1522897352,
              "sunset": 1522944824
          },
          "id": 706483,
          "name": "Kharkiv",
          "cod": 200
      },
      {
          "coord": {
              "lon": 24.03,
              "lat": 49.84
          },
          "weather": [
              {
                  "id": 801,
                  "main": "Clouds",
                  "description": "few clouds",
                  "icon": "02d"
              }
          ],
          "base": "stations",
          "main": {
              "temp": 293.15,
              "pressure": 1009,
              "humidity": 34,
              "temp_min": 293.15,
              "temp_max": 293.15
          },
          "visibility": 10000,
          "wind": {
              "speed": 4,
              "deg": 240
          },
          "clouds": {
              "all": 20
          },
          "dt": 1522933200,
          "sys": {
              "type": 1,
              "id": 7361,
              "message": 0.0028,
              "country": "UA",
              "sunrise": 1522900286,
              "sunset": 1522947745
          },
          "id": 702550,
          "name": "Lviv",
          "cod": 200
      }
      ]
    )
  }
}
