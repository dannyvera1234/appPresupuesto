import { EgresoService } from './../../../service/egreso.service';
import { IngresoService } from './../../../service/ingreso.service';
import { Egreso } from './../../../models/engreso.model';
import { Ingreso } from './../../../models/ingreso.model';
import { Component } from '@angular/core';

@Component({
  selector: 'app-presupuesto',
  templateUrl: './presupuesto.component.html',
  styleUrls: ['./presupuesto.component.css'],
})
export class PresupuestoComponent {
  ingreso: Ingreso[] = [];
  egreso: Egreso[] = [];

  /**
   *  @name constructor
   * @param IngresoService
   * @param EgresoService
   *
   */
  constructor(
    private IngresoService: IngresoService,
    private EgresoService: EgresoService
    /**
     *  inicializamos las variables ingreso y egreso
     * @name ingreso
     * @description
     */
  ) {
    // this.ingreso = IngresoService.ingresos;
    // this.egreso = EgresoService.egreso;
  }

  /**
   * @name getIngresoTotal
   * @description
   * Funcion que retorna el total de ingresos
   * @returns {number}
   */
  getIngresoTotal() {
    let ingresosTotal: number = 0;
    this.IngresoService.ingresos.forEach((data) => {
      ingresosTotal = ingresosTotal + data.valor;
    });
    return ingresosTotal;
  }

  /**
   * @name getEgresoTotal
   * @description
   * Funcion que retorna el total de egresos
   * @returns {number}
   */

  getEgresoTotal() {
    let egresoTotal: number = 0;
    this.EgresoService.egreso.forEach((data) => {
      egresoTotal = egresoTotal + data.valor;
    });
    return egresoTotal;
  }

  /**
   * @name getProcentajeTotal
   * @description
   * Funcion que retorna el porcentaje total
   * @returns {number}
   */
  getProcentajeTotal() {
    return this.getEgresoTotal() / this.getIngresoTotal();
  }

  /**
   * @name getPresupuestoTotal
   * @description
   * Funcion que retorna el presupuesto total
   * @returns {number}
   */
  getPresupuestoTotal() {
    return this.getIngresoTotal() - this.getEgresoTotal();
  }
}
