import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ehr';
  user:Number=1;
  ngOnInit(): void {
    console.log("user from app:"+this.user);
  }
}
