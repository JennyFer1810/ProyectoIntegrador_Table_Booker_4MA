import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PagesComponent } from './pages.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { PagesRoutingModule } from './pages-routing.module';
import { SharedModule } from '../shared/shared.module';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { CustomerReservationComponent } from './customer-reservation/customer-reservation.component';
import { AdminReservationComponent } from './admin-reservation/admin-reservation.component';
import { RouterModule } from '@angular/router';
import { ProfileComponent } from './profile/profile.component';
import { FormsModule } from '@angular/forms';



@NgModule({
  declarations: [

    DashboardComponent,
    ReservationFormComponent,
    CustomerReservationComponent,
    AdminReservationComponent,
    ProfileComponent
  ],
  imports: [
    CommonModule,
    PagesRoutingModule,
    SharedModule,
    //RouterModule.forRoot([])
    FormsModule
  ],

})
export class PagesModule { }
