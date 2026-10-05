import { Component, signal } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-semaforo',
  styleUrl: './semaforo.css',
  templateUrl: './semaforo.html',
})
export class Semaforo {
  contador=signal(0);
  colorin =signal('roja');


  incrementar() {
    this.contador.update((value) => value + 1);
    this.revisarColor();
  }
  disminuir() {
    this.contador.update((value) => value - 1);
    this.revisarColor();
  }

  reset() {
    this.contador.set(0);
    this.revisarColor();
  }

  revisarColor() {
    if (this.contador() >= 0) {
      this.colorin.set("green");
    } else {
      this.colorin.set("red");
    }
  }

  //? >=2 vrd 0 amb y <0 rjo
}
