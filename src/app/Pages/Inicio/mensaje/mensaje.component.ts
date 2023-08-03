import { Component, OnInit} from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
import { LoginServiceService } from 'src/app/Services/Login/login-service.service';
import { UsuarioService } from 'src/app/Services/Usuario/usuario.service';
import { newContrasena } from 'src/app/Types/NuevaContraseña';
import Swal from 'sweetalert2';
declare var window: any;
@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})

export class MensajeComponent implements OnInit{

  formModal:any;

  usuarioCorreo: string | null = '';

  nuevaContrasena: newContrasena = {
    contrasena: '',
    correo: ''
  }

  constructor(private loginService:LoginServiceService, private usuarioService:UsuarioService){}

  update:boolean = false

  ngOnInit(): void {
    anime({
      targets: '.card',
      translateY: 250
    });
  
    this.formModal = new window.bootstrap.Modal(
      document.getElementById('contrasena')
    );
  
    this.usuarioCorreo = this.loginService.getCorreo();
  
    if (this.usuarioCorreo !== null) {
      this.usuarioService.usuarioPorCorreo(this.usuarioCorreo).subscribe(
        (data: any) => {
          this.update = data.is_update;
          console.log(this.update);
          if (!this.update) {
            this.formModal.show();
          }
        },
        (error: any) => {
          console.error(error);
          // Manejar el error si ocurre
        }
      );
    }
  }

  actualizarContrasena(){


    if(this.nuevaContrasena.correo.trim() == '' || this.nuevaContrasena.correo.trim() == null){
      Swal.fire('Error', 'Debes de llenar todos los campos','error')
      return
    }
    if (this.nuevaContrasena.correo.trim() !== this.usuarioCorreo) {
      Swal.fire('Error', 'El correo no coincide', 'error');
      return;
    }
    if(this.nuevaContrasena.contrasena.trim() == '' || this.nuevaContrasena.contrasena.trim() == null){
      Swal.fire('Error', 'Debes de llenar todos los campos','error')
      return
    }
    this.usuarioService.contraseñaUpdate(this.nuevaContrasena).subscribe(
      (data:any) => {
        console.log(data)
        Swal.fire('Contraseña Actualizada', 'La Contraseña ha sido Actualizada exitosamente', 'success')
        this.update = true;
        this.formModal.hide();
      }
    )
  }



}
