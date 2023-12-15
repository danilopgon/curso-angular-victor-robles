import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Coche } from './coche';

@Component({
  selector: 'coche',
  templateUrl: './coche.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
})
export class CocheComponent {
  public coche: Coche;
  public coches: Coche[];

  constructor() {
    this.coche = new Coche('', '', '');
    this.coches = [
      new Coche('Seat Panda', '120', 'Rojo'),
      new Coche('Renault Clio', '110', 'Azul'),
    ];
  }

  onSubmit = () => {
    this.coches.push(this.coche);
    this.coche = new Coche('', '', '');
  };
}
