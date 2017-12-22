import { Injectable } from '@angular/core';

@Injectable()
export class SecondService {

  constructor() { }
  getData4(){
    return "Data from second service getData4 function !";  
  }
  getData5(){
    return "Data from second service getData5 function !";  
  }
}
