export class LoginUsuarioModel {
  contrasenia = '';
  correo = '';


  constructor(correo: string, contrasenia: string) {
    this.contrasenia = contrasenia;
    this.correo = correo
  }
}
