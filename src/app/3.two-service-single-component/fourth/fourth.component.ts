import { SecondService } from './../../0.services/second.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fourth-one',
  templateUrl: './fourth.component.html',
  styleUrls: ['./fourth.component.css']
})
export class FourthComponent implements OnInit {
  data1:string;
  data2:string;
  constructor(private secondservice_firstfunction_data: SecondService,              
              private secondservice_secondfunction_data: SecondService) {                
    this.data1 = secondservice_firstfunction_data.getData4();
    this.data2 = secondservice_secondfunction_data.getData5();
   }
  
  ngOnInit() {
  }

}
