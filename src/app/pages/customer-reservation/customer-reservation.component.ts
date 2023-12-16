import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-customer-reservation',
  templateUrl: './customer-reservation.component.html',
  styleUrls: ['./customer-reservation.component.scss']
})
export class CustomerReservationComponent {
  constructor(private router: Router, private reservacionService: ReservaService) { }

  navegarAReservationForm() {
    this.router.navigate(['/reservationForm']);
  }

  async getCustomeReservaList(){

  }


}
