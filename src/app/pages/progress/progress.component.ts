import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-progress',
  templateUrl: './progress.component.html',
  styles: []
})
export class ProgressComponent implements OnInit {


  progreso1: number = 30;
  progreso2: number = 50;

  constructor() { }

  ngOnInit() {

  }
  // Evento que actualiza el estado de la barra y del input
  // actualizarProgress( event: number) {
  //   console.log('Evento', event);
  //   this.progreso1 = event;
  // }

}// end class
