import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { LoginServiceService } from 'src/app/Services/Login/login-service.service';
import { UsuarioService } from 'src/app/Services/Usuario/usuario.service';
import { Rol } from 'src/app/Types/Roles';
import { Usuario } from 'src/app/Types/Usuario';
import anime from 'animejs/lib/anime.es.js';
import Swal from 'sweetalert2';

@Component({
  selector: 'app-crear-usuario',
  templateUrl: './crear-usuario.component.html',
  styleUrls: ['./crear-usuario.component.css']
})
export class CrearUsuarioComponent implements OnInit {

  rol: Rol[] = []

  usuarios: Usuario = {
    nombre: '',
    apellido: '',
    correo: '',
    idRol: 0
  }

  constructor(private usuarioService:UsuarioService, private router:Router, private loginService:LoginServiceService){}

  ngOnInit(): void {
    this.usuarioService.listarRoles().subscribe(
      (data:any) => {
        this.rol = data;
        console.log(this.rol)
      },
      (error) => {
        console.log(error);
        Swal.fire('Error','Error al cargar los roles')
      }
    )

    anime({
      targets: '.card',
      translateY: -100,
      duration: 2000
    });
  }

  validarUsuario(){
    if(this.usuarios.nombre.trim() == '' || this.usuarios.nombre.trim() == null){
      Swal.fire('Error', 'Debes de Ingresar el nombre del usuario', 'error')
      return
    }
    if(this.usuarios.apellido.trim() == '' || this.usuarios.apellido.trim() == null){
      Swal.fire('Error', 'Debes de Ingresar el apellido del usuario', 'error')
      return
    }
    if(this.usuarios.correo.trim() == '' || this.usuarios.correo.trim() == null){
      Swal.fire('Error', 'Debes de Ingresar el correo del usuario', 'error')
      return
    }
    if(this.usuarios.idRol == 0 || this.usuarios.idRol == null){
      Swal.fire('Error', 'Debes de Ingresar el rol de usuario', 'error')
      return
    }

    console.log(this.usuarios);

    this.usuarioService.usuarioPorCorreo(this.usuarios.correo).subscribe(
      (data: any) => {
        if (data != null) {
          Swal.fire('Error', 'El correo ya ha sido utilizado anteriormente', 'error');
        } else {
          this.crearUsuario();
        }
      },
      (error) => {
        console.log(error);
        Swal.fire('Error', 'Error al crear el usuario', 'error')
      }
    );
  }
  



  crearUsuario(){
    let correo  = this.loginService.getCorreo()

    if(correo !=null || correo != ''){
      this.usuarioService.crearUsuario(this.usuarios, correo).subscribe(
        (data:any) => {
          console.log(data);
          
          this.usuarios.nombre = '',
          this.usuarios.apellido = '',
          this.usuarios.correo = '',
          this.usuarios.idRol = 0
          Swal.fire('Usuario Creado', 'El usuario fue creado con exito', 'success')
        },
        (error) => {
          console.log(error);
          Swal.fire('Error', 'Error al crear el usuario', 'error')
        }
      )
    }else{
      Swal.fire('Error', 'No existe el correo', 'error')
      this.loginService.logout()
    }
  }

}
