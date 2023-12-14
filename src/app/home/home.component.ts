import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RopaService } from '../services/ropa.service';
import { ConversorPipe } from '../pipes/conversor.pipe';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule, ConversorPipe],
  providers: [RopaService],
})
export class HomeComponent {
  public title: string = 'Página principal';
  public listadoRopa: string[];
  public nuevaPrenda: string = '';

  public fecha: Date;
  public nombre = 'JUAN lópez Martínez';

  constructor(private _ropaService: RopaService) {
    this.listadoRopa = this._ropaService.getRopa();
    this.fecha = new Date(2023, 11, 14);
  }

  ngOnInit() {
    console.log(this.listadoRopa);
  }

  guardarPrenda = () => {
    if (this.nuevaPrenda.length > 0) {
      this._ropaService.addRopa(this.nuevaPrenda.trim());
    }

    this.nuevaPrenda = '';
  };

  eliminarPrenda = (index: number) => {
    this._ropaService.deleteRopa(index);
  };
}
