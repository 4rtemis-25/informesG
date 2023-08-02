import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LoginComponent } from './componentesGenerales/login/login.component';
import { DashboardInicioComponent } from './Pages/Inicio/dashboard-inicio/dashboard-inicio.component';
import { loginGuard } from './Guards/rutasGenerales/login-guard.guard';
import { DashboardUsuarioComponent } from './Pages/Usuarios/dashboard-usuario/dashboard-usuario.component';
import { CrearUsuarioComponent } from './Pages/Usuarios/crear-usuario/crear-usuario.component';
import { DashboardCarteraComponent } from './Pages/InformeCartera/dashboard-cartera/dashboard-cartera.component';
import { InformeGeneralCarteraComponent } from './Pages/InformeCartera/informe-general-cartera/informe-general-cartera.component';
import { VentasContadoComponent } from './Pages/InformeCartera/ventas-contado/ventas-contado.component';
import { AdelantosComponent } from './Pages/InformeCartera/adelantos/adelantos.component';
import { PagosCarteraComponent } from './Pages/InformeCartera/pagos-cartera/pagos-cartera.component';
import { InteresesComponent } from './Pages/InformeCartera/intereses/intereses.component';
import { CrecimientoCarteraComponent } from './Pages/InformeCartera/crecimiento-cartera/crecimiento-cartera.component';
import { DashboardInventarioComponent } from './Pages/InformeInventarios/dashboard-inventario/dashboard-inventario.component';
import { InformeGeneralInventariosComponent } from './Pages/InformeInventarios/informe-general-inventarios/informe-general-inventarios.component';
import { InformeTotalComponent } from './Pages/InformeInventarios/informe-total/informe-total.component';
import { InformeMabeComponent } from './Pages/InformeInventarios/informe-mabe/informe-mabe.component';
import { InformeChallengerComponent } from './Pages/InformeInventarios/informe-challenger/informe-challenger.component';
import { InformeLgComponent } from './Pages/InformeInventarios/informe-lg/informe-lg.component';
import { DashboardVentasComponent } from './Pages/InformeVentas/dashboard-ventas/dashboard-ventas.component';
import { InformeGeneralVentasComponent } from './Pages/InformeVentas/informe-general-ventas/informe-general-ventas.component';
import { VentasChallengerComponent } from './Pages/InformeVentas/ventas-challenger/ventas-challenger.component';
import { VentasMabeComponent } from './Pages/InformeVentas/ventas-mabe/ventas-mabe.component';
import { VentasLgComponent } from './Pages/InformeVentas/ventas-lg/ventas-lg.component';
import { VentasTotalesComponent } from './Pages/InformeVentas/ventas-totales/ventas-totales.component';
import { DashboardOpcionesCarteraComponent } from './Pages/InformeCartera/Opciones/dashboard-opciones-cartera/dashboard-opciones-cartera.component';
import { DashboardOpcionesInventarioComponent } from './Pages/InformeInventarios/Opciones/dashboard-opciones-inventario/dashboard-opciones-inventario.component';
import { DashboardOpcionesVentasComponent } from './Pages/InformeVentas/Opciones/dashboard-opciones-ventas/dashboard-opciones-ventas.component';

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
  {
    path: 'informe-cartera', redirectTo:'dashboard-cartera/opciones-cartera' , pathMatch:'full' 
  },

  {
    path: 'dashboard-cartera',
    component: DashboardCarteraComponent,
    canActivate: [loginGuard],
    children:[
      {
        path: 'opciones-cartera',
        component: DashboardOpcionesCarteraComponent
      },
      {
        path: 'informe-general-cartera',
        component: InformeGeneralCarteraComponent
      },
      {
        path: 'ventas-contado',
        component: VentasContadoComponent
      },
      {
        path: 'adelantos',
        component: AdelantosComponent
      },
      {
        path: 'pagos-cartera',
        component: PagosCarteraComponent
      },
      {
        path: 'intereses',
        component: InteresesComponent
      },
      {
        path: 'crecimiento-cartera',
        component: CrecimientoCarteraComponent
      },

    ]
  },

  {

    path: 'informe-inventario', redirectTo:'dashboard-inventario/opciones-inventario' , pathMatch:'full' 
  },
  
  {
    path: 'dashboard-inventario',
    component: DashboardInventarioComponent,
    canActivate: [loginGuard],
    children:[
      {
        path: 'opciones-inventario',
        component: DashboardOpcionesInventarioComponent,
      },
      {
        path: 'informe-general-inventario',
        component: InformeGeneralInventariosComponent,
      },
      {
        path: 'informe-total',
        component: InformeTotalComponent
      },
      {
        path: 'informe-mabe',
        component: InformeMabeComponent
      },
      {
        path: 'informe-challenger',
        component: InformeChallengerComponent
      },
      {
        path: 'informe-lg',
        component: InformeLgComponent
      }
    ]
  },
  {

    path: 'informe-ventas', redirectTo:'dashboard-ventas/opcionesVentas' , pathMatch:'full' 
  },
  
  {
    path: 'dashboard-ventas',
    component: DashboardVentasComponent,
    canActivate: [loginGuard],
    
    children:[
      {
        path: 'opcionesVentas',
        component: DashboardOpcionesVentasComponent,
      },
      {
        path: 'informe-general-venta',
        component: InformeGeneralVentasComponent,
      },
      {
        path: 'ventas-challenger',
        component: VentasChallengerComponent
      },
      {
        path: 'ventas-mabe',
        component: VentasMabeComponent
      },
      {
        path: 'ventas-lg',
        component: VentasLgComponent
      },
      {
        path: 'ventas-totales',
        component: VentasTotalesComponent
      },
    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
