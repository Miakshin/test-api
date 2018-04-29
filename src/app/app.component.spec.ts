import { TestBed, async } from '@angular/core/testing';
import { FormsModule } from '@angular/forms';
import { AppComponent } from './app.component';
import { MainPageService } from './main-page/main-page.service';
import { MainPageWidgetComponent } from './main-page/main-page-widget/main-page-widget.component';
import { MainPageComponent } from './main-page/main-page.component';
import { HttpClientModule } from '@angular/common/http';

describe('AppComponent', () => {
  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [
        AppComponent,
        MainPageComponent,
        MainPageWidgetComponent
      ],
      imports: [
        FormsModule,
        HttpClientModule
      ],
      providers: [
        MainPageService
      ]
    }).compileComponents();
  }));
  it('should create the app', async(() => {
    const fixture = TestBed.createComponent(AppComponent);
    const app = fixture.debugElement.componentInstance;
    expect(app).toBeTruthy();
  }));
});
