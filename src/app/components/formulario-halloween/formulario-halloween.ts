import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { NgFor } from '@angular/common';
import { TarjetaHalloweenComponent } from '../tarjeta-halloween/tarjeta-halloween';
import { ObjetoHalloween } from '../tarjeta-halloween/objeto-halloween';

@Component({
  imports: [ReactiveFormsModule, NgFor, TarjetaHalloweenComponent],
  selector: 'app-formulario-halloween',
  styleUrl: './formulario-halloween.css',
  templateUrl: './formulario-halloween.html',
})
export class FormularioHalloween {
  objetos: ObjetoHalloween[] = [];

  formularioHalloween = new FormGroup({
    imagen: new FormControl('', [Validators.required]),
    objeto: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
    descripcion: new FormControl('', [Validators.required, Validators.minLength(10)]),
    propietario: new FormControl('', [Validators.required, Validators.minLength(3), Validators.maxLength(50)]),
  });

  enviar() {
    if (this.formularioHalloween.invalid) return;

    const valores = this.formularioHalloween.getRawValue();
    const nuevo: ObjetoHalloween = {
      imagen: valores.imagen ?? '',
      objeto: valores.objeto ?? '',
      descripcion: valores.descripcion ?? '',
      propietario: valores.propietario ?? '',
    };

    this.objetos.push(nuevo);
    this.formularioHalloween.reset();
  }
  
  eliminarObjeto(objeto: ObjetoHalloween) {
  const indice = this.objetos.indexOf(objeto);
  if (indice !== -1) {
    this.objetos.splice(indice, 1);
  }
}
}