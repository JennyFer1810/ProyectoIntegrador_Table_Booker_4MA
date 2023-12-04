import { Component } from '@angular/core';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.scss']
})
export class ProfileComponent {
 /* activeTab: string = 'activo'; // Establece 'activo' como la pestaña activa por defecto

  mostrarPerfil(tab: string) {
    this.activeTab = tab; // Cambia la pestaña activa según el enlace seleccionado
  }*/

  tabs = [
    { title: 'Tab 1', content: 'Contenido de la pestaña 1' },
    { title: 'Tab 2', content: 'Contenido de la pestaña 2' },
    { title: 'Tab 3', content: 'Contenido de la pestaña 3' }
  ];
  activeTab = this.tabs[0]; // Establece la pestaña activa por defecto

  setActiveTab(tab: any): void {
    this.activeTab = tab;
  }
}