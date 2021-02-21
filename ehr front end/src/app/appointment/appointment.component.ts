import { Component, OnInit } from '@angular/core';
import { PatientService } from '../service/patient/patient.service';

@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private patientService:PatientService) { }

  ngOnInit(): void {
  }
  submit(data){
   this.patientService.createAppointment(data).subscribe(result=>{
     console.log(result);
   })
  }
}