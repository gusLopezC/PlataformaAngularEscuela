import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Grupos } from '../../models/grupos.model';
import { Examenes } from 'src/app/models/examenes.model';
import { ExamenesService } from '../../services/services.index';
import { GruposService } from '../../services/services.index';

@Component({
  selector: 'app-examen',
  templateUrl: './examen.component.html',
  styles: []
})
export class ExamenComponent implements OnInit {

  grupos: Grupos[] = [];
  examen: Examenes = new Examenes();

  constructor(public __examenService: ExamenesService,
    public _gruposService: GruposService) { }

  ngOnInit() {
    this._gruposService.cargarGrupos().subscribe(grupos => {
      grupos = this.grupos = grupos.mostrandoGrupos;
    });
  }


  guardarExamen(f: NgForm) {
    if (f.invalid) {
      return;
    }

    this.__examenService.guardarExamen(this.examen).subscribe(resp =>  {
      console.log(resp);
    });
  }
}
