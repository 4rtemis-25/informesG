import { AfterViewInit, Component } from '@angular/core';
import anime from 'animejs/lib/anime.es.js';

@Component({
  selector: 'app-opciones-ventas',
  templateUrl: './opciones-ventas.component.html',
  styleUrls: ['./opciones-ventas.component.css']
})
export class OpcionesVentasComponent implements AfterViewInit{
  ngAfterViewInit() {
    // Obtén todos los elementos con la clase "option" después de que el DOM esté listo
    const options = document.querySelectorAll('.option');

    // Recorre cada elemento con la clase "option" y agrega una animación a cada uno
    options.forEach((option, index) => {
      anime({
        targets: option,
        translateX: 250,
        delay: 100 * index, // Cada elemento se animará con un retraso diferente
        easing: 'easeOutExpo',
        duration: 500, // Puedes ajustar la duración según tus preferencias
      });
    });
  }
}
