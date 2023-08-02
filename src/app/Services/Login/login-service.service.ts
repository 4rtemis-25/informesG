import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Types/Login';
import baseUrl from 'src/app/Utils/Helper';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  constructor(private http:HttpClient, private router:Router) { }

  public logueo(LoginData:Login){
    return this.http.post(`${baseUrl}/usuarios/login`, LoginData)
  }

  public loginUser(correo:any){
    localStorage.setItem('correo', correo)
  }

  public loginRol(rol:string){
    localStorage.setItem('rol', rol)
  }


  public isLogged(){
    let correoL = localStorage.getItem('correo');
    if(correoL == undefined || correoL == '' || correoL == null){
      return false;
    }else {
      return true
    }
  }

  public logout() {
    localStorage.removeItem('correo');
    localStorage.removeItem('rol')
    this.router.navigate([''])
  }

  public getCorreo(){
    return localStorage.getItem('correo')
  }
}
