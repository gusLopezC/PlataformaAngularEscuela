import { Component, OnInit } from '@angular/core';
import { NgForm } from '@angular/forms';
import { Grupos } from '../../models/grupos.model';
import { Examenes } from 'src/app/models/examenes.model';
import { ExamenesService } from '../../services/services.index';
import { GruposService } from '../../services/services.index';
import { Router, ActivatedRoute } from '@angular/router';


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
    public router: Router,
    public activatedRoute: ActivatedRoute) {

    activatedRoute.params.subscribe(params => {
      const id = params['id'];

      if (id !== 'nuevo') {
        this.obtenerExamen(id);
      }
    });
  }

  ngOnInit() {
    this._gruposService.cargarGrupos().subscribe(grupos => {
      grupos = this.grupos = grupos.mostrandoGrupos;
    });
  }

  obtenerExamen(id: string) {
    this.__examenService.obtenerExamen(id).subscribe(examen => {
      console.log(examen);
      this.examen = examen;
      this.examen.grupo = examen.grupo._id;
      this.cambioGrupo(this.examen.grupo);
    });
  }

  guardarExamen(f: NgForm) {
    if (f.invalid) {
      return;
    }

    this.__examenService.guardarExamen(this.examen).subscribe(examen => {
      console.log(examen);
      this.examen._id = examen._id;
      this.router.navigate(['/examen', examen._id]);
    });
  }

  cambioGrupo(id: string) {

    this._gruposService.obtenerGrupos(id).subscribe(grupos =>  this.grupos = grupos);
  }
}
