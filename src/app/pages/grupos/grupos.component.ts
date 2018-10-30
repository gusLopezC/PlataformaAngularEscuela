import { Component, OnInit } from '@angular/core';
import { GruposService } from '../../services/services.index';
import { Grupos } from '../../models/grupos.model';
declare var swal: any;

@Component({
  selector: 'app-grupos',
  templateUrl: './grupos.component.html',
  styleUrls: ['./grupos.component.css']
})
export class GruposComponent implements OnInit {

  grupos: Grupos[] = [];
  totalRegistros: number = 0;
  cargando: boolean = true;
  constructor(public _gruposService: GruposService) { }

  ngOnInit() {
    this.cargarGrupos();
  }

  cargarGrupos() {
    this.cargando = true;
    this._gruposService.cargarGrupos().subscribe((resp: any) => {
      this.totalRegistros = resp.total;
      this.grupos = resp.mostrandoGrupos;
      this.cargando = false;
    });
  }


  buscarGrupos(termino: string) {

    if (termino.length <= 0) {
      this.cargarGrupos();
      return;
    }
    this.cargando = true;
    this._gruposService.buscarGrupos(termino).subscribe((grupos: Grupos[]) => {
      this.grupos = grupos,
        this.cargando = false;
    });
  }

  guardarGrupo(grupo: Grupos) {

  this._gruposService.actualizarGrupos(grupo).subscribe();
  }

  borrarGrupo(grupo: Grupos) {

    swal({
      title: '¿Esta seguro?',
      text: 'Esta a punto de borrar a ',
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then(borrar => {

        if (borrar) {

          this._gruposService.borrarGrupos(grupo._id)
            .subscribe(borrado => {
              console.log(borrado);
              this.cargarGrupos();
            });

        }

      });
  }

}
