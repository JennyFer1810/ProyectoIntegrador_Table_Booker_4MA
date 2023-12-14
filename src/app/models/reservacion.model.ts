import { Mesa } from './mesa.model';

export class Reserva {
  fecha_reserva: Date = new Date();
  fecha_registro_reserva: Date = new Date();
  estado: boolean = false;
  costo_reserva: number = 0;
  costo_total: number = 0;
  id_usuario: number = 0;
  mesa: Mesa = new Mesa();
}
