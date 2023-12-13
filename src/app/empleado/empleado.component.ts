import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Empleado } from './empleado';

@Component({
  selector: 'empleado',
  standalone: true,
  templateUrl: './empleado.component.html',
  imports: [CommonModule],
})
export class EmpleadoComponent {
  public title = 'Componente Empleados';

  public empleado: Empleado;
  public listaEmpleados: Empleado[];
  public mostrarLista: boolean;

  constructor() {
    this.mostrarLista = false;
    this.empleado = new Empleado('Kratos', 64, 'Guerrero', true);
    this.listaEmpleados = [
      new Empleado('Daniel López', 29, 'Programador', true),
      new Empleado('Geriberto Rodríguez', 52, 'Contable', true),
      new Empleado('Tomasito', 53, 'Músico', true),
    ];
  }

  cambiarLista = () => {
    this.mostrarLista = !this.mostrarLista;
  };
}
