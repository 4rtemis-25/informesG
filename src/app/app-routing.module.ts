import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentesGenerales/login/login.component';
import { DashboardInicioComponent } from './Pages/Inicio/dashboard-inicio/dashboard-inicio.component';
import { loginGuard } from './Guards/rutasGenerales/login-guard.guard';
import { DashboardUsuarioComponent } from './Pages/Usuarios/dashboard-usuario/dashboard-usuario.component';
import { CrearUsuarioComponent } from './Pages/Usuarios/crear-usuario/crear-usuario.component';

const routes: Routes = [
  {
    path: '',
    component: LoginComponent
  },
  {
    path: 'inicio',
    component: DashboardInicioComponent,
    canActivate: [loginGuard]
  },
  {
    path: 'usuarios', redirectTo:'dashboard-usuario/crear-usuario' , pathMatch:'full' 
  },
  {
    path: 'dashboard-usuario',
    component: DashboardUsuarioComponent,
    canActivate: [loginGuard],
    children:[
      {
        path: 'crear-usuario',
        component: CrearUsuarioComponent,
      }
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
