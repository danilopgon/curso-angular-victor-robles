import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Coche } from './coche';
import { PeticionesService } from '../services/peticiones.service';

@Component({
  selector: 'coche',
  templateUrl: './coche.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [PeticionesService],
})
export class CocheComponent {
  public coche: Coche;
  public coches: Coche[];
  public posts: any;

  constructor(private _peticionesService: PeticionesService) {
    this.coche = new Coche('', '', '');
    this.coches = [
      new Coche('Seat Panda', '120', 'Rojo'),
      new Coche('Renault Clio', '110', 'Azul'),
    ];
  }

  ngOnInit() {
    this._peticionesService.getPosts().subscribe({
      next: (res) => {
        this.posts = res;

        if (!this.posts) {
          console.log('Error en el servidor');
        }
      },
      error: (error) => {
        console.log(error);
      },
    });
  }

  onSubmit = () => {
    this.coches.push(this.coche);
    this.coche = new Coche('', '', '');
  };
}
