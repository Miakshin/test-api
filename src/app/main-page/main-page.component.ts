import { Component, OnInit } from '@angular/core';
import{ MainPageService } from './main-page.service'

@Component({
  selector: 'app-main-page',
  templateUrl: './main-page.component.html',
  styleUrls: ['./main-page.component.css']
})
export class MainPageComponent implements OnInit {



  constructor( private service : MainPageService ) { }

  ngOnInit() {
    
  }

}
