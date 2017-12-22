import { FirstService } from './../../0.services/first.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-third',
  templateUrl: './third.component.html',
  styleUrls: ['./third.component.css']
})
export class ThirdComponent implements OnInit {
  data:string;
  constructor( private firstservice_data: FirstService) {
    this.data =  firstservice_data.getData3();
   }

  ngOnInit() {
  }
}
