import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/Login/login-service.service';
import { UsuarioService } from 'src/app/Services/Usuario/usuario.service';
import { Login } from 'src/app/Types/Login';
import { Rol } from 'src/app/Types/Roles';
import Swal from 'sweetalert2';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit{

  loginData: Login = {
    correo: '',
    password: ''
  }

  roles: string[] = []

  constructor(private router:Router, private loginService:LoginServiceService, private usuarioService:UsuarioService){}

  ngOnInit(): void {
    this.traerRoles()

    anime({
      targets: '.card',
      translateY: 250,
      duration: 2000
    });
  }

  public inicioSesion(){
    if(this.loginData.correo.trim() == '' || this.loginData.correo.trim() == null){
      Swal.fire('Error', 'El Correo es obligatorio','error')
      return
    }
    if(this.loginData.password.trim() == '' || this.loginData.password.trim() == null){
      Swal.fire('Error', 'La Contraseña es obligatoria','error')
      return
    }
    this.loginService.logueo(this.loginData).subscribe(
      (data:any) => {
        this.loginService.setUpdate(data.is_update)
        this.loginService.loginUser(data.correo)
        this.loginService.loginRol(data.roles.find((r:any)=> this.roles.includes(r.nombreRol)).nombreRol)
        
        Swal.fire('Felicidades', 'Inicio de Sesion Exitoso', 'success')
        this.router.navigate(['/inicio'])
      },
      (error:any) => {
        console.log(error);
        Swal.fire('Error', 'Sus Datos Son Incorrectos', 'error')
        this.loginData = {
          correo: '',
          password: ''
        }
      }
    )
    
    }

  public logout(){
    this.loginService.logout()
  }

  public traerRoles(){
    this.usuarioService.listarRoles().subscribe(
      (data:any) => {
        data.forEach((r:any) => {
          this.roles.push(r.nombreRol)
        });
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar los roles')
      }
    )
  }

}
