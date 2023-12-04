import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ReservationFormComponent } from './reservation-form/reservation-form.component';
import { CustomerReservationComponent } from './customer-reservation/customer-reservation.component';
import { AdminReservationComponent } from './admin-reservation/admin-reservation.component';
import { ProfileComponent } from './profile/profile.component';

const routes: Routes = [
  { path: 'dashboard', component: DashboardComponent, pathMatch: 'full' },
  { path: 'reservationForm', component: ReservationFormComponent, pathMatch: 'full' },
  { path: 'customerReservation', component: CustomerReservationComponent, pathMatch: 'full' },
  { path: 'adminReservation', component: AdminReservationComponent, pathMatch: 'full' },
  { path: 'profile', component: ProfileComponent, pathMatch: 'full' }
];

@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    RouterModule.forChild(routes)
  ],
  exports: [RouterModule]
})
export class PagesRoutingModule { }
