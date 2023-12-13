import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Empleado } from './empleado';

@Component({
  selector: 'empleado',
  standalone: true,
  templateUrl: './empleado.component.html',
  styleUrl: './empleado.component.css',
  imports: [CommonModule, FormsModule],
})
export class EmpleadoComponent {
  public title = 'Componente Empleados';

  public empleado: Empleado;
  public listaEmpleados: Empleado[];
  public mostrarLista: boolean;
  public color: string;
  public colorSeleccionado: string;

  constructor() {
    this.empleado = new Empleado('Kratos', 64, 'Guerrero', true);
    this.listaEmpleados = [
      new Empleado('Daniel López', 29, 'Programador', true),
      new Empleado('Geriberto Rodríguez', 52, 'Contable', true),
      new Empleado('Tomasito', 53, 'Músico', true),
    ];
    this.mostrarLista = false;
    this.color = 'blue';
    this.colorSeleccionado = '#cccccc';
  }

  cambiarLista = () => {
    this.mostrarLista = !this.mostrarLista;
  };
}
