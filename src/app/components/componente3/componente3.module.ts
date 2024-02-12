import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { Componente3RoutingModule } from './componente3-routing.module';
import { Componente3Component } from './componente3.component';


@NgModule({
  declarations: [Componente3Component],
  imports: [
    CommonModule,
    Componente3RoutingModule
  ],
  exports: [Componente3Component],
  providers: [],
  bootstrap: [Componente3Component]
})
export class Componente3Module { }
