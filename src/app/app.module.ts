import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { NZ_I18N } from 'ng-zorro-antd/i18n';
import { en_US } from 'ng-zorro-antd/i18n';
import { registerLocaleData } from '@angular/common';
import en from '@angular/common/locales/en';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { PresupuestoComponent } from './pages/web/presupuesto/presupuesto.component';
import { HomeComponent } from './pages/web/home/home.component';
import { HeaderComponent } from './shared/elementos/header/header.component';
import { FormularioComponent } from './shared/elementos/formulario/formulario.component';
import { IngresosComponent } from './shared/elementos/ingresos/ingresos.component';
import { EngresosComponent } from './shared/elementos/engresos/engresos.component';
import { FooterComponent } from './shared/elementos/footer/footer.component';
import { AppRoutingModule } from './app-routing.module';
import { NzLayoutModule } from 'ng-zorro-antd/layout';
import { NzGridModule } from 'ng-zorro-antd/grid';
import { NzTableModule } from 'ng-zorro-antd/table';
import { NzDividerModule } from 'ng-zorro-antd/divider';
registerLocaleData(en);

@NgModule({
  declarations: [
    AppComponent,
    PresupuestoComponent,
    HomeComponent,
    HeaderComponent,
    FormularioComponent,
    IngresosComponent,
    EngresosComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    BrowserAnimationsModule,
    NzLayoutModule,
    NzGridModule,
    NzTableModule,
    NzDividerModule
   
  ],
  providers: [
    { provide: NZ_I18N, useValue: en_US }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
