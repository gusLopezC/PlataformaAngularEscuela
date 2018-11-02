import { Component, OnInit } from '@angular/core';
import { Examenes } from 'src/app/models/examenes.model';
import { ExamenesService } from '../../services/services.index';
declare var swal: any;

@Component({
  selector: 'app-examenes',
  templateUrl: './examenes.component.html',
  styles: []
})
export class ExamenesComponent implements OnInit {

  examenes: Examenes[] = [];
  totalRegistros: number = 0;
  cargando: boolean = true;
  constructor(
    public _examenesService: ExamenesService
  ) { }

  ngOnInit() {
    this.cargarExamenes();
  }

  cargarExamenes() {
    this.cargando = true;
    this._examenesService.cargarExamen().subscribe(resp => {
      this.totalRegistros = resp.total;
      this.examenes = resp.mostrandoExamen;
      this.cargando = false;
    });

  }

  buscarExamen(termino: string) {
    if (termino.length <= 0) {
      this.cargarExamenes();
      return;
    }
    this.cargando = true;
    this._examenesService.buscarExamen(termino).subscribe((examenes: Examenes[]) => {
      this.examenes = examenes,
      this.cargando = false;
    });
  }

  borrarExamen(examenes: Examenes) {
    swal({
      title: '¿Esta seguro?',
      text: 'Esta a punto de borrar a ',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then(borrar => {

        if (borrar) {

          this._examenesService.borrarExamen(examenes._id)
            .subscribe(borrado => {
              this.cargarExamenes();
            });

        }

      });
  }
}
