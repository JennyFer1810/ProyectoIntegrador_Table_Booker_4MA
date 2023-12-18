import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva as ReservaModel } from 'src/app/models/reservacion.model';
import { ReservaService } from 'src/app/services/reserva.service';

@Component({
  selector: 'app-admin-reservation',
  templateUrl: './admin-reservation.component.html',
  styleUrls: ['./admin-reservation.component.scss'],
})
export class AdminReservationComponent implements OnInit {

  adminReservationList: ReservaModel[] = [];

  constructor(private reservaService: ReservaService) {}

  ngOnInit(): void {
    this.getAllReservations();
  }


  //Funcion getListAllReservations
  private async getAllReservations() {
    this.reservaService.getListReserva().subscribe({
      next: (data: ReservaModel[]) =>{
        this.adminReservationList = data;
      },
      error: (err: Error) =>{
        console.log(err);
      }
    })
  }
}
