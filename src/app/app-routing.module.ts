import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes } from '@angular/router';
import { PresupuestoComponent } from './pages/web/presupuesto/presupuesto.component';

const routes: Routes = [
  {
    path: '',
    component: PresupuestoComponent,
  },
];
@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
