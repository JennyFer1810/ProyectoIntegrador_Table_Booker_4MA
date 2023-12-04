import { Component } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-customer-reservation',
  templateUrl: './customer-reservation.component.html',
  styleUrls: ['./customer-reservation.component.scss']
})
export class CustomerReservationComponent {
  constructor(private router: Router) {}

  navegarAReservationForm() {
    this.router.navigate(['/reservationForm']);
  }
}
