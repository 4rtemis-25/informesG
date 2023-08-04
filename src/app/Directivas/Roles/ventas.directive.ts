import { Directive, ElementRef, Renderer2 } from '@angular/core';

@Directive({
  selector: '[appVentas]'
})
export class VentasDirective {

  constructor(private el: ElementRef, private renderer: Renderer2) {
    const userRole = localStorage.getItem('rol');
    console.log(userRole)

    if(userRole == 'VENTAS' || userRole == 'ADMINISTRADOR'){
      this.renderer.setStyle(this.el.nativeElement, 'display', 'block');
    } else {
      this.renderer.setStyle(this.el.nativeElement, 'display', 'none');
    }
   }

}
