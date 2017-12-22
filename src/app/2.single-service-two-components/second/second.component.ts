import { FirstService } from './../../0.services/first.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {
  data:string;
  constructor(private firstservice_data: FirstService) { 
    this.data = firstservice_data.getData2();
  }
  
  ngOnInit() {
  }

}
