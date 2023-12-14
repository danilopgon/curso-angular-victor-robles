import { Pipe, PipeTransform } from '@angular/core';

@Pipe({ name: 'conversor', standalone: true })
export class ConversorPipe implements PipeTransform {
  transform(value: number, por: number): string {
    let result = `La multiplicación ${value} x ${por} es ${value * por}`;

    return result;
  }
}
