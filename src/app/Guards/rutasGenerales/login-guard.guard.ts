import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { LoginServiceService } from 'src/app/Services/Login/login-service.service';

@Injectable({
  providedIn: 'root'
})
export class loginGuard implements CanActivate {


  constructor(private loginService:LoginServiceService, private router: Router) {}

  canActivate(
    next: ActivatedRouteSnapshot,
    state: RouterStateSnapshot): boolean | UrlTree {

    if(this.loginService.isLogged()){
      return true;
    }
    this.router.navigate([''])
    return false
    
  }
}