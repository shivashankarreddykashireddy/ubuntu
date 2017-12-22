import { ThirdService } from './../../0.services/third.service';
import { Component, OnInit } from '@angular/core';
import { Http, Response } from '@angular/http';

@Component({
  selector: 'app-fifth',
  templateUrl: './fifth.component.html',
  styleUrls: ['./fifth.component.css']
})
export class FifthComponent implements OnInit {
  data12:any;
  constructor( private thirdservice_data: ThirdService ) { 
    this.thirdservice_data.getData6().subscribe(res => this.data12 = res, err => console.log(err));
  }

  ngOnInit() {
    
  }

}
