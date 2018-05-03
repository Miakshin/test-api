import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { MainPageWidgetComponent } from './main-page-widget.component';
import { MainPageService } from '../main-page.service';
import { HttpClientModule } from '@angular/common/http';
import {Widget} from '../widget';

const mockData : Widget =   {
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
}

describe('MainPageWidgetComponent', () => {
  let component: MainPageWidgetComponent;
  let fixture: ComponentFixture<MainPageWidgetComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ MainPageWidgetComponent ],
      providers: [MainPageService ],
      imports: [
        HttpClientModule],
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(MainPageWidgetComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create widget with data', () => {
    component.data = mockData;
    fixture.detectChanges();
    expect(component).toBeTruthy();
  });
});
