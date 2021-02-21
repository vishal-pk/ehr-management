import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponentComponent } from './home-component/home-component.component';
import { LoginComponent } from './login/login.component';
import { NavbarComponent } from './navbar/navbar.component';
import { SidebarComponent } from './sidebar/sidebar.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { RegisterComponent } from './register/register.component';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatListModule} from '@angular/material/list';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AppointmentComponent } from './appointment/appointment.component';
import { SearchComponent } from './search/search.component';
import { MatTableModule } from '@angular/material/table';
import { DataSource } from '@angular/cdk/table';
import { DoctorComponent } from './doctor/doctor.component';
import { MenuListItemComponent } from './sidebar/menu-list-item/menu-list-item.component';
import { CheckinListComponent } from './checkin-list/checkin-list.component';
import {MatButtonModule} from '@angular/material/button';
import { CheckinComponent } from './checkin/checkin.component';
import { PrescriptionComponent } from './prescription/prescription.component';
import { PatientdetailsComponent } from './patientdetails/patientdetails.component';
import { AuthService } from './service/auth.service';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponentComponent,
    LoginComponent,
    NavbarComponent,
    SidebarComponent,
    DashboardComponent,
    RegisterComponent,
    AppointmentComponent,
    SearchComponent,
    DoctorComponent,
    MenuListItemComponent,
    CheckinListComponent,
    CheckinComponent,
    PrescriptionComponent,
    PatientdetailsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    MatSidenavModule,
    MatListModule,
    BrowserAnimationsModule,
    MatTableModule,
    MatButtonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [AuthService],
  bootstrap: [AppComponent]
})
export class AppModule { }
