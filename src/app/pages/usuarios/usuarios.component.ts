import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from 'src/app/services/services.index';
import { ModalUploadService } from '../../components/modal-upload/modal-upload.service';
declare var swal: any;

@Component({
  selector: 'app-usuarios',
  templateUrl: './usuarios.component.html',
  styles: []
})
export class UsuariosComponent implements OnInit {

  usuarios: Usuario[] = [];
  desde: number = 0;
  totalRegistros: number = 0;
  cargando: boolean = true;

  constructor(public _usuarioService: UsuarioService, public _modalUploadService: ModalUploadService) { }

  ngOnInit() {
    this.cargarUsuarios();
    this._modalUploadService.notificacion.subscribe(resp => {
      this.cargarUsuarios();
    });
  }

  cargarUsuarios() {
    this.cargando = true;
    this._usuarioService.cargarUsuarios(this.desde).subscribe((resp: any) => {

      this.totalRegistros = resp.total;
      this.usuarios = resp.mostrandousuarios;
      this.cargando = false;
    });
  }
  cambiarDesde(valor: number) {

    const desde = this.desde + valor;
    console.log(desde);

    if (desde >= this.totalRegistros) {
      return;
    }
    if (desde < 0) {
      return;
    }

    this.desde += valor;
    this.cargarUsuarios();
  }

  buscarUsuario(termino: string) {
    console.log(termino);

    if (termino.length <= 0) {
      this.cargarUsuarios();
      return;
    }
    this.cargando = true;
    this._usuarioService.buscarUsuarios(termino).subscribe((usuarios: Usuario[]) => {
      console.log(usuarios);
      this.usuarios = usuarios;
      this.cargando = false;
    });
  }

  borrarUsuario(usuario: Usuario) {
    console.log(usuario);

    if (usuario._id === this._usuarioService.seleccionUsuario._id) {
      swal('No se puede eliminar el usuario', 'No se puede borrar asi mismo.', 'error');
      return;
    }

    swal({
      title: '¿Esta seguro?',
      text: 'Esta a punto de borrar a ' + usuario.name,
      icon: 'warning',
      buttons: true,
      dangerMode: true,
    })
      .then(borrar => {

        if (borrar) {

          this._usuarioService.borrarUsuario(usuario._id)
            .subscribe(borrado => {
              console.log(borrado);
              this.cargarUsuarios();
            });

        }

      });
  }

  guardarUsuario(usuario: Usuario) {

    this._usuarioService.actualizarUsuario(usuario).subscribe();
  }

  mostrarModal(id: string) {
    this._modalUploadService.mostrarModal('usuarios', id);
  }
}
