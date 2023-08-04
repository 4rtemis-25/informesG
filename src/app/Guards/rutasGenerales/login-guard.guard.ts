import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from 'src/app/Services/Login/login-service.service';
import { UsuarioService } from 'src/app/Services/Usuario/usuario.service';
import { ROL } from 'src/app/Types/Roles';

@Injectable({
  providedIn: 'root'
})
export class loginGuard implements CanActivate {
  
  private redirectCount = 0;

  constructor(private loginService: LoginServiceService, private router: Router, private usuarioService: UsuarioService) {}

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean | UrlTree {
    if (this.loginService.isLogged()) {
      const userRole: string | null = this.usuarioService.getRoles();

      if (userRole === null) {
        // Si el rol es nulo, redirigir al inicio de sesión
        return this.redirectToLogin();
      }

      // Verificar si el usuario es administrador
      if (userRole === 'ADMINISTRADOR') {
        return true;
      }

      const allowedRoutes: string[] = [];

      if (userRole === 'VENTAS') {
        allowedRoutes.push('/inicio', '/dashboard-ventas/opcionesVentas');
      } else if (userRole === 'CARTERA') {
        allowedRoutes.push('/inicio','/dashboard-cartera/opciones-cartera');
      }

      if (allowedRoutes.includes(state.url)) {
        return true;
      }

      // Si el valor del rol no es válido o la ruta no está permitida para el usuario, redirigir al inicio
      return this.redirectToLogin();
    }

    // Si el usuario no está logueado, redirigir al inicio de sesión
    return this.redirectToLogin();
  }

  private redirectToLogin(): UrlTree {
    if (this.redirectCount === 0) {
      this.redirectCount++;
      return this.router.parseUrl('/inicio');
    } else {
      // Si ya se ha redirigido una vez, devolver la UrlTree vacía
      return this.router.parseUrl('');
    }
  }
}
