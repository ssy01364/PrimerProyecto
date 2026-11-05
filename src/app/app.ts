import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Semaforo } from './components/semaforo/semaforo';
import { Frutas } from './components/frutas/frutas';
import { NavBar } from './components/nav-bar/nav-bar';
import { FormularioHalloween } from './components/formulario-halloween/formulario-halloween';


@Component({
  imports: [RouterOutlet, NavBar],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('PrimerProyecto');
}
