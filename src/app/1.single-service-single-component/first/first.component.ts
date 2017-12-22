import { FirstService } from './../../0.services/first.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-first',
  templateUrl: './first.component.html',
  styleUrls: ['./first.component.css']
})
export class FirstComponent implements OnInit {
  data:string;
  constructor(private firstservice_data : FirstService) { 
    this.data = this.firstservice_data.getData();
  }

  ngOnInit() {
  }
}
