import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-formulariopreguntas',
  templateUrl: './formulariopreguntas.component.html',
  styleUrls: ['./formulariopreguntas.component.css']
})
export class FormulariopreguntasComponent implements OnInit {

  formularioOP: boolean = true;
  formularioRL: boolean = true;
  formularioPA: boolean = true;
  formularioFV: boolean = true;
  constructor() { }

  ngOnInit() {
  }

  mostrarformularioOP (formularioOP) {
    if (formularioOP) {
      this.formularioOP = false;
      this.formularioRL = true;
      this.formularioPA = true;
      this.formularioFV = true;
    } else {
      this.formularioOP = true;

    }
  }

  mostrarformularioRL (formularioRL) {
    if (formularioRL) {
      this.formularioRL = false;
      this.formularioOP = true;
      this.formularioPA = true;
      this.formularioFV = true;
    } else {
      this.formularioOP = true;
      this.formularioRL = true;
      this.formularioPA = true;
      this.formularioFV = true;
    }
  }
  mostrarformularioPA (formularioPA) {
    if (formularioPA) {
      this.formularioPA = false;
      this.formularioOP = true;
      this.formularioRL = true;
      this.formularioFV = true;
    } else {
      this.formularioOP = true;
      this.formularioRL = true;
      this.formularioPA = true;
      this.formularioFV = true;
    }
  }
  mostrarformularioFV (formularioFV) {
    if (formularioFV) {
      this.formularioFV = false;
      this.formularioOP = true;
      this.formularioRL = true;
      this.formularioPA = true;
    } else {
      this.formularioOP = true;
      this.formularioRL = true;
      this.formularioPA = true;
      this.formularioFV = true;
    }
  }
}
