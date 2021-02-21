import { Injectable } from '@angular/core';
import {HttpClient, HttpHeaders} from '@angular/common/http'
@Injectable({
  providedIn: 'root'
})
export class AuthService {

  constructor(private http : HttpClient) { }

   login(email,password){
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
     var data={
       email:email,
       password:password
     }
    return this.http.post("http://localhost:5000/auth/doctor",data,{headers:headers});

  }
  isAuthenticated(){
    if(localStorage.getItem('token'))
    return true;
    else
    return false
  }
}
