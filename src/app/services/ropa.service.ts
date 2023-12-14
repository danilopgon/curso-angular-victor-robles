import { Injectable } from '@angular/core';

@Injectable()
export class RopaService {
  public nombrePrenda = 'Pantalones vaqueros';
  public coleccionRopa: string[] = ['Pantalones blancos', 'Camiseta roja'];

  prueba = (nombrePrenda: string) => {
    return nombrePrenda;
  };

  addRopa = (nombrePrenda: string): string[] => {
    this.coleccionRopa.push(nombrePrenda);

    return this.getRopa();
  };

  getRopa() {
    return this.coleccionRopa;
  }

  deleteRopa(index: number) {
    this.coleccionRopa.splice(index, 1);
  }
}
