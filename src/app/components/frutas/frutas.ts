import { Component } from '@angular/core';

@Component({
  imports: [],
  selector: 'app-frutas',
  styleUrl: './frutas.css',
  templateUrl: './frutas.html',
})

export class Frutas {
  //nombre_frutas:string[]=["f1","f2","f3","f4","f5"];

  frutas:Fruta[]=[new Fruta("naranja",false,"/images/naranja.png"),
    new Fruta("pera",true,"/images/pera.png"),
    new Fruta("uva",true,"/images/uva.png"),
    new Fruta("fresa",false,"/images/fresa.png"),
    new Fruta("platano",true,"/images/platano.png")]
}

class Fruta{
  nombre:string;
  like:boolean;
  imagen:string;

  constructor(n:string, l:boolean,s:string){
    this.nombre=n;
    this.like=l;
    this.imagen=s;
  }
}
