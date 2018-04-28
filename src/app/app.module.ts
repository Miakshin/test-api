import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';


import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageService } from './main-page/main-page.service';
import { MainPageWidgetComponent } from './main-page/main-page-widget/main-page-widget.component';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent,
    MainPageWidgetComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
  ],
  providers: [
    MainPageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
