import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AppointmentComponent } from './appointment/appointment.component';
import { CheckinListComponent } from './checkin-list/checkin-list.component';
import { CheckinComponent } from './checkin/checkin.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { RegisterComponent } from './register/register.component';
import { SearchComponent } from './search/search.component';

const routes: Routes = [
  { path: 'register', component: RegisterComponent },
  { path: 'dashboard', component: DashboardComponent },
  { path: 'appointment', component: AppointmentComponent },
  { path: 'search', component: SearchComponent },
  { path: 'checkInList', component: CheckinListComponent },
  { path: 'checkin', component: CheckinComponent },
  { path: 'prescription', component: PrescriptionComponent },
  { path: 'patientdetails', component: PatientdetailsComponent },
 
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
