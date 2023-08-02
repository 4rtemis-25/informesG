import { Component, OnInit} from '@angular/core';
import anime from 'animejs/lib/anime.es.js';
@Component({
  selector: 'app-mensaje',
  templateUrl: './mensaje.component.html',
  styleUrls: ['./mensaje.component.css']
})
export class MensajeComponent implements OnInit{
  ngOnInit(): void {
    anime({
      targets: '.card',
      translateY: 250
    });
  }

}
