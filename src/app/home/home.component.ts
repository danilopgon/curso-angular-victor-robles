import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { RopaService } from '../services/ropa.service';

@Component({
  selector: 'home',
  templateUrl: './home.component.html',
  standalone: true,
  imports: [CommonModule, FormsModule],
  providers: [RopaService],
})
export class HomeComponent {
  public title: string = 'Página principal';
  public listadoRopa: string[];
  public nuevaPrenda: string = '';

  constructor(private _ropaService: RopaService) {
    this.listadoRopa = this._ropaService.getRopa();
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
