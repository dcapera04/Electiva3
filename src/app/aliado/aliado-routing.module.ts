import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {AuthGuard} from '../guards/auth.guard';

import { AliadoComponent } from './aliado.component';

const routes: Routes = [{ path: '', component: AliadoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class AliadoRoutingModule { }
