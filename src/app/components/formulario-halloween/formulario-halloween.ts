import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { email } from '@angular/forms/signals';

@Component({
  imports: [ReactiveFormsModule],
  selector: 'app-formulario-halloween',
  styleUrl: './formulario-halloween.css',
  templateUrl: './formulario-halloween.html',
})
export class FormularioHalloween {
  FormularioHalloween = new FormGroup({
    nombre: new FormControl(''),
    email: new FormControl(''),
    edad: new FormControl('')
});

enviar(){
  console.log(this.FormularioHalloween.value);
}
}
