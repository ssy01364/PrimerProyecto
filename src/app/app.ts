import { Component, signal } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { Semaforo } from './components/semaforo/semaforo';
import { Frutas } from './components/frutas/frutas';
@Component({
  imports: [RouterOutlet, Semaforo, Frutas],
  selector: 'app-root',
  styleUrl: './app.css',
  templateUrl: './app.html',
})
export class App {
  protected readonly title = signal('PrimerProyecto');
}
