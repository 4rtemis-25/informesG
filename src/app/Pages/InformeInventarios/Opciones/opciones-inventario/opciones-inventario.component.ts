import { AfterViewInit, Component } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-opciones-inventario',
  templateUrl: './opciones-inventario.component.html',
  styleUrls: ['./opciones-inventario.component.css']
})
export class OpcionesInventarioComponent implements AfterViewInit {
  ngAfterViewInit() {
    // Obtén todos los elementos con la clase "option" después de que el DOM esté listo
    const options = document.querySelectorAll('.option');

    // Recorre cada elemento con la clase "option" y agrega una animación a cada uno
    options.forEach((option, index) => {
      anime({
        targets: option,
        translateY: 400,
        delay: 100 * index, // Cada elemento se animará con un retraso diferente
        easing: 'easeOutExpo',
        duration: 1000, // Puedes ajustar la duración según tus preferencias
      });
    });
  }
}
