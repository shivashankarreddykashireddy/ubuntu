import { Http, Response } from '@angular/http';
import { Injectable } from '@angular/core';
import 'rxjs/Rx';

@Injectable()
export class ThirdService {
  data:any;
  constructor( private http:Http) { }

  getData6() {
    return this.http.get("http://localhost:5555")
               .map((res:Response) => this.data = res.json());
  }
}