import { Injectable } from '@angular/core';
import { Egreso } from '../models/engreso.model';

@Injectable({
  providedIn: 'root'
})
export class EgresoService {

  /**
   * @name egreso
   * @description
   * Variable que almacena los egresos
   * @type {Egreso[]}
   * 
   */
  egreso: Egreso[] = [
    new Egreso('Renta departamento', 900),
    new Egreso('Ropa', 200)
  ];

  constructor() { }


  /**
   * @name eliminar
   * @description
   * Funcion que elimina un egreso
   * @param {number} index 
   * @returns {void}
   */
  eliminarEgreso(data:Egreso){
    const indice: number = this.egreso.indexOf(data);
    this.egreso.splice(indice,1);
  }

  /**
   *  @name agregar
   * @description
   * Funcion que agrega un egreso
   * @param {Egreso} egreso
   * @returns {void}
   */
}
