import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Grupos } from '../../models/grupos.model';
import { Examenes } from 'src/app/models/examenes.model';
import { ExamenesService } from '../../services/services.index';
import { GruposService } from '../../services/services.index';
import { Router } from '@angular/router';


@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styles: []
})
export class ExamenComponent implements OnInit {

  grupos: Grupos[] = [];
  examen: Examenes = new Examenes('', '', '', null, null, '', '', '');
  grupo: Grupos = new Grupos('', '', '', '', '');

  constructor(
    public __examenService: ExamenesService,
    public _gruposService: GruposService,
    public router: Router) { }

  ngOnInit() {
    this._gruposService.cargarGrupos().subscribe(grupos => {
      grupos = this.grupos = grupos.mostrandoGrupos;
    });
  }


  guardarExamen(f: NgForm) {
    if (f.invalid) {
      return;
    }

    this.__examenService.guardarExamen(this.examen).subscribe(examen => {
      console.log(examen);
    });
  }

  cambioGrupo(id: string) {

    this._gruposService.obtenerGrupos(id).subscribe(grupos => this.grupos = grupos);
  }
}
