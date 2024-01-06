import { Injectable } from '@angular/core';
import { Ingreso } from '../models/ingreso.model';

@Injectable({
  providedIn: 'root'
})
export class IngresoService {
  /**
   * @name ingresos
   * @description
   * Variable que almacena los ingresos
   * @type {Ingreso[]}
   */
ingresos: Ingreso[] = [
  new Ingreso('Salario', 4000),
  new Ingreso('Venta coche', 500)
];
  constructor() { }


/**
 * @name eliminarIngreso
 * @param data 
 * @description
 * Funcion que elimina un ingreso
 * indexOf(data) busca el indice del elemento data en el array ingresos y lo almacena en la variable indice
 * splice(indice,1) elimina un elemento del array en la posicion indice y elimina 1 elemento
 */
  eliminarIngreso(data:Ingreso){
    const indice: number = this.ingresos.indexOf(data);
    this.ingresos.splice(indice,1);
  }
}
