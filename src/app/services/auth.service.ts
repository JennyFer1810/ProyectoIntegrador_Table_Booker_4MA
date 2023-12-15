import { Injectable } from '@angular/core';
import { environment } from 'src/environments/environment';
import { HttpClient } from '@angular/common/http';
import { LoginUsuarioModel } from '../models/login.model';
import { Observable } from 'rxjs';
import { Usuario as UsuarioModel } from '../models/usuario.model';
import { TokenModel } from '../models/token.model';

@Injectable({
  providedIn: 'root'
})
export class AuthService {

  authURL = environment.authUrl;

  constructor(private httpClient: HttpClient) { }

  //=================================== Usuario
  login(dto: LoginUsuarioModel): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'login', dto);
  }

  registro(dto: UsuarioModel): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'nuevo', dto);
  }

  refresh(dto: TokenModel): Observable<any> {
    return this.httpClient.post<any>(this.authURL + 'refresh', dto);
  }

  public update(id_usuario: number, usuario: UsuarioModel): Observable<any> {
    return this.httpClient.patch<any>(`${this.authURL}${id_usuario}`, usuario);
  }

  public delete(id_usuario: number): Observable<any> {
    return this.httpClient.delete<any>(`${this.authURL}${id_usuario}`);
  }

  public detail(id_usuario: number): Observable<UsuarioModel> {
    return this.httpClient.get<UsuarioModel>(`${this.authURL}${id_usuario}`);
  }

  public lista(): Observable<UsuarioModel[]> {
    return this.httpClient.get<UsuarioModel[]>(`${this.authURL}`);
  }

}
