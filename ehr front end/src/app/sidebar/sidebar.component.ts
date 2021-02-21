import { Component, OnInit,Input } from '@angular/core';
import {SideNavItem} from "src/app/menu-item";
@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  @Input() user: Number;
  navitems:SideNavItem[];
  constructor() { }

  ngOnInit(): void {
    console.log("user from sidebar:"+this.user);
    this.initiliaseValues();
  }
  initiliaseValues(){
     if (this.user==1){
      this.navitems=[
        {
          displayName: 'DashBoard',
           iconName: 'dashboard',
           route: '/dashboard',
        },
        {
          displayName: 'Register',
           iconName: 'person_add',
           route: '/register',
        },
        {
          displayName: 'Appointment',
           iconName: 'note_add',
           route: '/appointment',
        },
        {
          displayName: 'Search',
           iconName: 'search',
           route: '/search',
        },

      ];
     }
     if(this.user==2){
      this.navitems=[
        {
          displayName: 'DashBoard',
           iconName: 'dashboard',
           route: '/checkInList',
        },
        {
          displayName: 'Check-In',
           iconName: 'fact_check',
           route: '/checkin',
        },
        {
          displayName: 'Prescribe',
           iconName: 'medication',
           route: '/prescription',
        },
        {
          displayName: 'Search',
           iconName: 'search',
           route: '/search',
        },

      ];
 
     }
  }

}
