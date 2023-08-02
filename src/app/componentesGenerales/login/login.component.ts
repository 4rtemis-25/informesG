import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/Login/login-service.service';
import { Login } from 'src/app/Types/Login';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent {

  loginData: Login = {
    correo: '',
    password: ''
  }

  constructor(private router:Router, private loginService:LoginServiceService){}

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
        this.loginService.loginUser(data.correo)
        this.loginService.loginRol(data.roles.find((rol:any) => rol.nombreRol == 'ADMINISTRADOR').nombreRol)
        console.log(data)
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

}
