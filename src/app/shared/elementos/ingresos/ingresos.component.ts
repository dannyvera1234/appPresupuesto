import { Component, OnInit, Output } from '@angular/core';
import { Ingreso } from 'src/app/models/ingreso.model';
import { IngresoService } from 'src/app/service/ingreso.service';

@Component({
  selector: 'app-ingresos',
  templateUrl: './ingresos.component.html',
  styleUrls: ['./ingresos.component.css']
})
export class IngresosComponent implements OnInit{

  ingreso:Ingreso[] = [];
  constructor(private ingresoservice:IngresoService ) { }
  ngOnInit(): void {
    this.ingreso = this.ingresoservice.ingresos;
  }

  eliminarRegistro(data:Ingreso){
    this.ingresoservice.eliminarIngreso(data);

  }




}
