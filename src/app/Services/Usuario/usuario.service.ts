import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { newContrasena } from 'src/app/Types/NuevaContraseña';
import { Rol } from 'src/app/Types/Roles';
import { Usuario } from 'src/app/Types/Usuario';
import baseUrl from 'src/app/Utils/Helper';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(private http:HttpClient) { }

  public listarRoles(){
    return this.http.get(`${baseUrl}/usuarios/listarRoles`)
  }

  public crearUsuario(usuario:Usuario, correo:string | null){
    return this.http.post(`${baseUrl}/usuarios/?correo=${correo}`, usuario)
  }

  public usuarioPorCorreo(correo:string | null){
    return this.http.get(`${baseUrl}/usuarios/listarUsuario/${correo}`)
  }

  public contraseñaUpdate(newContrasena:newContrasena){
    return this.http.put(`${baseUrl}/usuarios/Update`, newContrasena)
  }


}
