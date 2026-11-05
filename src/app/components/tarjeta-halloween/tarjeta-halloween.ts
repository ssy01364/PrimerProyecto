import { Component, EventEmitter, Input, Output } from '@angular/core';
import { ObjetoHalloween } from './objeto-halloween';

@Component({
  selector: 'app-tarjeta-halloween',
  styleUrl: './tarjeta-halloween.css',
  templateUrl: './tarjeta-halloween.html',
})
export class TarjetaHalloweenComponent {
  @Input({ required: true }) objeto!: ObjetoHalloween;
  @Output() eliminar = new EventEmitter<ObjetoHalloween>();

  pedirEliminar() {
    this.eliminar.emit(this.objeto);
  }
}