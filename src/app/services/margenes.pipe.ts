import { Pipe, PipeTransform } from '@angular/core';

/*
  Conversión de márgenes devueltos por la API.
  Margen = ubicación de la gasolinera en la carretera
  I: margen Izquierdo
  D: margen Derecho
  N: margen indiferente (no relevante)
 */

@Pipe({
  name: 'margenes'
})
export class MargenesPipe implements PipeTransform {

  transform(value: any, args?: any): any {
    switch (value) {
      case 'I':
        return 'Izquierdo';
      case 'D':
        return 'Derecho';
      case 'N':
      default:
        return false;
    }
  }

}
