import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AliadoRoutingModule } from './aliado-routing.module';
import { AliadoComponent } from './aliado.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CrudService } from './crud.service';

@NgModule({
  declarations: [AliadoComponent],
  imports: [
    CommonModule,
    AliadoRoutingModule,
    FormsModule,
    ReactiveFormsModule,


  ],

})
export class AliadoModule { }
