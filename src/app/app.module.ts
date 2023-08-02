import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

//IMPORTACIONES PARA EL PROYECTO
import { LoginComponent } from './componentesGenerales/login/login.component';
import { FormsModule } from '@angular/forms';
import { MensajeComponent } from './Pages/Inicio/mensaje/mensaje.component';
import { DashboardInicioComponent } from './Pages/Inicio/dashboard-inicio/dashboard-inicio.component';
import { NavbarComponent } from './Pages/Navbar/navbar/navbar.component';
import { SidebarComponent } from './Pages/Sidebar/sidebar/sidebar.component';
import { CrearUsuarioComponent } from './Pages/Usuarios/crear-usuario/crear-usuario.component';
import { DashboardUsuarioComponent } from './Pages/Usuarios/dashboard-usuario/dashboard-usuario.component';
import { AdelantosComponent } from './Pages/InformeCartera/adelantos/adelantos.component';
import { CrecimientoCarteraComponent } from './Pages/InformeCartera/crecimiento-cartera/crecimiento-cartera.component';
import { DashboardCarteraComponent } from './Pages/InformeCartera/dashboard-cartera/dashboard-cartera.component';
import { InformeGeneralCarteraComponent } from './Pages/InformeCartera/informe-general-cartera/informe-general-cartera.component';
import { InteresesComponent } from './Pages/InformeCartera/intereses/intereses.component';
import { PagosCarteraComponent } from './Pages/InformeCartera/pagos-cartera/pagos-cartera.component';
import { VentasContadoComponent } from './Pages/InformeCartera/ventas-contado/ventas-contado.component';
import { DashboardInventarioComponent } from './Pages/InformeInventarios/dashboard-inventario/dashboard-inventario.component';
import { InformeChallengerComponent } from './Pages/InformeInventarios/informe-challenger/informe-challenger.component';
import { InformeGeneralInventariosComponent } from './Pages/InformeInventarios/informe-general-inventarios/informe-general-inventarios.component';
import { InformeLgComponent } from './Pages/InformeInventarios/informe-lg/informe-lg.component';
import { InformeMabeComponent } from './Pages/InformeInventarios/informe-mabe/informe-mabe.component';
import { InformeTotalComponent } from './Pages/InformeInventarios/informe-total/informe-total.component';
import { DashboardVentasComponent } from './Pages/InformeVentas/dashboard-ventas/dashboard-ventas.component';
import { InformeGeneralVentasComponent } from './Pages/InformeVentas/informe-general-ventas/informe-general-ventas.component';
import { VentasChallengerComponent } from './Pages/InformeVentas/ventas-challenger/ventas-challenger.component';
import { VentasLgComponent } from './Pages/InformeVentas/ventas-lg/ventas-lg.component';
import { VentasMabeComponent } from './Pages/InformeVentas/ventas-mabe/ventas-mabe.component';
import { VentasTotalesComponent } from './Pages/InformeVentas/ventas-totales/ventas-totales.component';
import { DashboardOpcionesCarteraComponent } from './Pages/InformeCartera/Opciones/dashboard-opciones-cartera/dashboard-opciones-cartera.component';
import { OpcionesCarteraComponent } from './Pages/InformeCartera/Opciones/opciones-cartera/opciones-cartera.component';
import { DashboardOpcionesInventarioComponent } from './Pages/InformeInventarios/Opciones/dashboard-opciones-inventario/dashboard-opciones-inventario.component';
import { OpcionesInventarioComponent } from './Pages/InformeInventarios/Opciones/opciones-inventario/opciones-inventario.component';
import { DashboardOpcionesVentasComponent } from './Pages/InformeVentas/Opciones/dashboard-opciones-ventas/dashboard-opciones-ventas.component';
import { OpcionesVentasComponent } from './Pages/InformeVentas/Opciones/opciones-ventas/opciones-ventas.component';

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MensajeComponent,
    DashboardInicioComponent,
    NavbarComponent,
    SidebarComponent,
    CrearUsuarioComponent,
    DashboardUsuarioComponent,
    AdelantosComponent,
    CrecimientoCarteraComponent,
    DashboardCarteraComponent,
    InformeGeneralCarteraComponent,
    InteresesComponent,
    PagosCarteraComponent,
    VentasContadoComponent,
    DashboardInventarioComponent,
    InformeChallengerComponent,
    InformeGeneralInventariosComponent,
    InformeLgComponent,
    InformeMabeComponent,
    InformeTotalComponent,
    DashboardVentasComponent,
    InformeGeneralVentasComponent,
    VentasChallengerComponent,
    VentasLgComponent,
    VentasMabeComponent,
    VentasTotalesComponent,
    DashboardOpcionesCarteraComponent,
    OpcionesCarteraComponent,
    DashboardOpcionesInventarioComponent,
    OpcionesInventarioComponent,
    DashboardOpcionesVentasComponent,
    OpcionesVentasComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
