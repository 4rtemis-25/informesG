import { Directive, Input, OnInit, TemplateRef, ViewContainerRef } from '@angular/core';
import { UsuarioService } from 'src/app/Services/Usuario/usuario.service';
import { ROL, Rol } from 'src/app/Types/Roles';

@Directive({
  selector: '[appRol]'
})
export class RolDirective implements OnInit {

  
  roles:string[] =  ['CARTERA', 'VENTAS']
  rol:string = ""

  //rol del localstorage
  rolesString: string | null= ""

  constructor(private templateRef: TemplateRef<any>, private viewContainer: ViewContainerRef, private usuarioService:UsuarioService) { }


  ngOnInit(): void {

    this.rolesString = this.usuarioService.getRoles()

    if (this.rolesString == ROL.ADMINISTRADOR) {
      this.viewContainer.createEmbeddedView(this.templateRef);
    }else{
      if(this.rolesString == this.rol){
        this.viewContainer.createEmbeddedView(this.templateRef);
      }else{
        if(this.rolesString == this.rol){
          this.viewContainer.createEmbeddedView(this.templateRef);
        }
      }
    }
  }

  @Input()
  set appRol(val: string) {
    this.rol = val;
  }

  

  

  

}
