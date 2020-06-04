import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { EdicionRoutingModule } from './edicion-routing.module';
import { EdicionComponent } from './edicion.component';


@NgModule({
  declarations: [EdicionComponent],
  imports: [
    CommonModule,
    EdicionRoutingModule
  ]
})
export class EdicionModule { }
