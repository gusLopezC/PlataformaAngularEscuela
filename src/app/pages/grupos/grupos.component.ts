import { Component, OnInit } from '@angular/core';
import { GruposService } from '../../services/services.index';
import { Grupos } from '../../models/grupos.model';
import { ModalUploadService } from 'src/app/components/modal-upload/modal-upload.service';
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
  cargarusuarios: boolean = true;
  mostrarCalificaciones: boolean = true;
  constructor(public _gruposService: GruposService,
    public _modalUploadService: ModalUploadService) { }

  ngOnInit() {
    this.cargarGrupos();
    this._modalUploadService.notificacion.subscribe(() => this.cargarGrupos());
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
              this.cargarGrupos();
            });

        }

      });
  }

  crearGrupo() {
    swal({
      title: 'Crear Grupo',
      text: 'Ingrese nombre del grupo',
      content: 'input',
      icon: 'info',
      buttons: true,
      dangerMode: true
    }).then((valor: string) => {
      if (!valor || valor.length === 0) {
        return;
      }

      this._gruposService.crearGrupos(valor).subscribe(() => this.cargarGrupos());

    });
  }
  actualizarImagen(grupo: string) {
    console.log('actImagen', grupo);
    this._modalUploadService.mostrarModal('grupos', grupo);
  }

  mostrarCargarUsuarios(cargarusuarios) {
    if (cargarusuarios) {
      this.cargarusuarios = false;
    } else {
      swal('Usuario cargados', '30 alumos guardados', 'success');
      this.cargarusuarios = true;
    }
  }

  mostrarCargarCalificaciones(mostrarCalificaciones) {
    if (mostrarCalificaciones) {
      this.mostrarCalificaciones = false;
    } else {
      this.mostrarCalificaciones = true;
    }
  }
}
