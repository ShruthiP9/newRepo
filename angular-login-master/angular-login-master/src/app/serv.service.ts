import { Injectable } from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';



@Injectable()
export class ServService {
tabledata=[];
  constructor(private http:Http ){

   }
   
   getPosts():Observable <any>{
     return this.http.get('assets/inputs.json').map((response:Response)=>response.json());
   }
   

}