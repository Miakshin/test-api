import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';


import { AppComponent } from './app.component';
import { MainPageComponent } from './main-page/main-page.component';
import { MainPageService } from './main-page/main-page.service';


@NgModule({
  declarations: [
    AppComponent,
    MainPageComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [
    MainPageService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
