import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'plantillas',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './plantillas.component.html',
  styleUrl: './plantillas.component.css',
})
export class PlantillasComponent {
  public titulo: string;
  public administrador: boolean;

  constructor() {
    this.titulo = 'Plantillas ngTemplate en Angular';
    this.administrador = true;
  }

  changeAdmin = (value: boolean) => {
    this.administrador = value;
  };
}
