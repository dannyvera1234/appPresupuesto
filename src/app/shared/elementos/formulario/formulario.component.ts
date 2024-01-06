import { Component } from '@angular/core';
import { Egreso } from 'src/app/models/engreso.model';
import { Ingreso } from 'src/app/models/ingreso.model';
import { EgresoService } from 'src/app/service/egreso.service';
import { IngresoService } from 'src/app/service/ingreso.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styleUrls: ['./formulario.component.css'],
})
export class FormularioComponent {
  descripcion: string;
  valor: number;
  tipo: string = 'ing';

  constructor(
    private ingresoServicio: IngresoService,
    private egresoServicio: EgresoService
  ) {}
  tipoOperacion(event: any) {
    this.tipo = event.target.value;
    console.log('Valor cambiado:', this.tipo);
  }

  agregarValor() {
    // console.log(this.agregarValor)
    if (this.tipo === 'ing') {
      this.ingresoServicio.ingresos.push(
        new Ingreso(this.descripcion, this.valor)
      );
     
    } else {
      this.egresoServicio.egreso.push(new Egreso(this.descripcion, this.valor));
    }
  }
}
