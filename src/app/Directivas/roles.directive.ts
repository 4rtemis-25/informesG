import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appRoles]'
})
export class RolesDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    const userRole = localStorage.getItem('rol');
    console.log(userRole)

    if(userRole == 'ADMINISTRADOR'){
      this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }
   }
}