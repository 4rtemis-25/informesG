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

@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    MensajeComponent,
    DashboardInicioComponent,
    NavbarComponent,
    SidebarComponent
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
