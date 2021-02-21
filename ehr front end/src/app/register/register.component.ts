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
    // var patient={
    //   name:data.name,
    //   age:data.age,
    //   number:data.contactnum,
    //   address:data.address,
    //   gender:data.gender,
    //   dob:data.dob
    // }
    console.log(data);
    this.patientService.createPatient(data).subscribe(data=>{
      if(data['token'])
      console.log("patient created");
    });
  }

}