import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Componente2RoutingModule } from './componente2-routing.module';
import { Componente2Component } from './componente2.component';


@NgModule({
  declarations: [Componente2Component],
  imports: [
    CommonModule,
    Componente2RoutingModule
  ],
  exports: [Componente2Component],
  providers: [],
  bootstrap: [Componente2Component]
})
export class Componente2Module { }
