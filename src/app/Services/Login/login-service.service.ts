import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { Login } from 'src/app/Types/Login';
import baseUrl from 'src/app/Utils/Helper';

@Injectable({
  providedIn: 'root'
})
export class LoginServiceService {

  isUpdate: boolean = false

  constructor(private http:HttpClient, private router:Router) { }

  public logueo(LoginData:Login){
    return this.http.post(`${baseUrl}/usuarios/login`, LoginData)
  }

  public loginUser(correo:any){
    localStorage.setItem('correo', correo)
  }

  public loginRol(rol:string | undefined){
    if(rol != null || rol != undefined){
      localStorage.setItem('rol', rol)
    }
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

  public setUpdate(isUpdate:boolean){
    this.isUpdate = isUpdate
  }

  public getUpdate(){
    return this.isUpdate
  }

  public usuarioPorCorreo(correo:string){
    return this.http.get(`${baseUrl}/usuarios/listarUsuario/${correo}`)
  }


}
