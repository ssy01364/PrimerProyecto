import { Routes } from '@angular/router';
import { Semaforo } from './components/semaforo/semaforo';
import { Frutas } from './components/frutas/frutas';
import { FormularioHalloween } from './components/formulario-halloween/formulario-halloween';

export const routes: Routes = [
  
    { path: 'semaforo', component: Semaforo },
  { path: 'frutas', component: Frutas },
  { path: 'formulario-halloween', component: FormularioHalloween }

];
