
import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from './guards/auth.guard';


const routes: Routes = [
  {
path: '',
redirectTo: '/login',
pathMatch: 'full',
  },
  { path: 'home', loadChildren: () => import('./home/home.module').then(m => m.HomeModule) },
   { path: 'login', loadChildren: () => import('./auth/login/login.module').then(m => m.LoginModule) },
    { path: 'register', loadChildren: () => import('./auth/register/register.module').then(m => m.RegisterModule) },
  { path: 'aliado', loadChildren: () => import('./aliado/aliado.module').then(m => m.AliadoModule),
     canActivate: [AuthGuard]
    },
  { path: 'edicion', loadChildren: () => import('./edicion/edicion.module').then(m => m.EdicionModule) },
  ];

@NgModule ({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
