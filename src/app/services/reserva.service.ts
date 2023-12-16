import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Reserva as ReservaModel } from '../models/reservacion.model';

@Injectable({
  providedIn: 'root'
})
export class ReservaService {

  reservaURL = environment.reservaUrl;

  constructor(private httpClient: HttpClient) { }

  public getListReserva(): Observable<ReservaModel[]> {
    return this.httpClient.get<ReservaModel[]>(`${this.reservaURL}`);
  }

  public getListUserReserva(usuario: number): Observable<ReservaModel[]> {
    return this.httpClient.get<ReservaModel[]>(`${this.reservaURL}${usuario}`);
  }

  public getByIdReserva(id: number): Observable<ReservaModel[]> {
    return this.httpClient.get<ReservaModel[]>(`${this.reservaURL}${id}`);
  }

  public saveReserva(reserva: ReservaModel): Observable<any> {
    return this.httpClient.post<any>(`${this.reservaURL}`, reserva);
  }

  public updateReserva(id: number, reserva: ReservaModel): Observable<any> {
    return this.httpClient.patch<any>(`${this.reservaURL}${id}`, reserva);

  }

  public deleteReserva(id: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.reservaURL}${id}`);
  }
}
