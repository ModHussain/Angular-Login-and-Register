import { Injectable } from '@angular/core';
import {Http,Headers} from '@angular/http';
//import { HttpClient, HttpErrorResponse } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class LoginserviceService { 
  constructor(private http:Http) { }
  login(userdetails) {
    // debugger;
    var headers = new Headers();
    headers.append('Content-Type', 'application/x-www-form-urlencoded');
    
    return this.http.post('http://localhost:2000/users/login'  , userdetails,{headers:headers});
    }
  
    addreg(obj){
      debugger;
      var headers = new Headers();
    headers.append('Content-Type', 'application/json');
    
      return this.http.post('http://localhost:2000/users/register' ,obj,{headers:headers});
    }

}