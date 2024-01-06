import { Egreso } from './../../../models/engreso.model';
import { Component, Input, OnInit } from '@angular/core';

import { EgresoService } from 'src/app/service/egreso.service';

@Component({
  selector: 'app-engresos',
  templateUrl: './engresos.component.html',
  styleUrls: ['./engresos.component.css'],
})
export class EngresosComponent implements OnInit {
  Egreso: Egreso[] = [];
  @Input() ingresoTotal: number;

  constructor(private egresoService: EgresoService) {}
  ngOnInit(): void {
    this.Egreso = this.egresoService.egreso;
  }

  eliminarRegistro(data: Egreso) {
    this.egresoService.eliminarEgreso(data);
  }
  calcularPorcentaje(Egreso:Egreso){
    return Egreso.valor/this.ingresoTotal;
  }
}
