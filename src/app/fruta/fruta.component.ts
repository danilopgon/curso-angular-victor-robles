import { Component } from '@angular/core';

@Component({
  selector: 'fruta',
  standalone: true,
  templateUrl: './fruta.component.html',
})
export class FrutaComponent {
  public nombreComponente = 'Componente de fruta';
  public listadoFruta = 'Naranja, Pera, Sandía';

  public nombre: string;
  public edad: number;
  public trabajos: Array<string> = ['Fontanero', 'Albañil', 'Carpintero'];

  constructor() {
    this.nombre = 'Daniel';
    this.edad = 29;
  }

  ngOnInit() {
    this.holaMundo();
  }

  holaMundo = () => {
    this.nombre = 'Geriberto';
    console.log('Hola ' + this.nombre);
  };
}
