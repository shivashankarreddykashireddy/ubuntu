import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';

@Injectable()
export class FirstService {

  constructor() { }
  getData(){
    return "Data from first service getData1 function !";
  }
  getData2(){
    return "Data from first service getData2 function !";
  }
  getData3(){
    return "Data from first service getData3 function !"
  }
}
