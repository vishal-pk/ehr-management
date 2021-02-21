import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient/patient.service';


@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {
  
  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
  }
  onSubmit(data){
   
    this.patientService.createPatient(data).subscribe(data=>{
      if(data['token'])
      console.log("patient created");
    });
  }

}