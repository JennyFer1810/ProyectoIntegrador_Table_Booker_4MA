import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { Reserva } from 'src/app/models/reservacion.model';
import { TokenService } from 'src/app/services/token.service';
import { ReservaService } from 'src/app/services/reserva.service';
import { AuthService } from 'src/app/services/auth.service';
import { Usuario } from 'src/app/models/usuario.model';

@Component({
  selector: 'app-reservation-form',
  templateUrl: './reservation-form.component.html',
  styleUrls: ['./reservation-form.component.scss'],
})
export class ReservationFormComponent implements OnInit {
  reserva: Reserva = new Reserva();
  id_user: any;
  usuario: Usuario = new Usuario();

  constructor(
    private router: Router,
    private reservaService: ReservaService,
    private tokenService: TokenService,
    private authService: AuthService
  ) {}
  ngOnInit(): void {
    this.id_user = this.tokenService.getIdUser() ?? 0;
    this.getUserById(this.id_user)
  }

  private getUserById(usuario: number) {
    this.authService.getUserById(usuario).subscribe({
      next: (data: Usuario) => {
        this.usuario = data;
      },
      error: (err: Error) => {
        console.log(err);
      },
    });
  }

  saveReservation() {
    this.reserva.usuario = this.usuario;
  }
}
