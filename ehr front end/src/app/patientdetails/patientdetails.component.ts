import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-patientdetails',
  templateUrl: './patientdetails.component.html',
  styleUrls: ['./patientdetails.component.css']
})
export class PatientdetailsComponent implements OnInit {
  public allergyList:any[]=["Penicillin","aspirin","ibuprofen"];
  public patientDetails:any[]=[{pid:"101",name:"Kani",age:43,gender:"Female",dob:"23/3/1970",bloodgrouo:"Ab+",address:"madurai,tamilnadu"}];
  public surgeryList:any[];
  constructor() { }

  ngOnInit(): void {
  }

}
