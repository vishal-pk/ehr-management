import { Component, OnInit } from '@angular/core';
import { AuthService } from '../service/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private authService : AuthService) { }
  username:string;
  password:string;
  ngOnInit(): void {

  }
  login(){
    this.authService.login(this.username,this.password).subscribe(data=>{
        console.log('loggedin')
        localStorage.setItem('token',data['token']);
      
    },err=>{
      console.log(err.error['msg'])
    });
    
  }

}
