import { Component, OnInit } from '@angular/core';
import { Usuario } from '../../models/usuario.model';
import { UsuarioService } from 'src/app/services/services.index';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styles: []
})
export class ProfileComponent implements OnInit {

  usuario: Usuario;
  imagenSubir: File;
  imagenTemp: string;


  constructor(
    public _usuarioService: UsuarioService
  ) {
    this.usuario = this._usuarioService.seleccionUsuario;
    // console.log(this.usuario);
  }

  ngOnInit() {
  }

  guardar(usuario: Usuario) {

    this.usuario.name = usuario.name;
    if (!this.usuario.google) {
      this.usuario.email = usuario.email;
    }

    this._usuarioService.actualizarUsuario(this.usuario)
      .subscribe();

  }
  guardarEscuela(usuario: Usuario) {

    this.usuario.escuela = usuario.escuela;
    this.usuario.serial = usuario.serial;

    this._usuarioService.actualizarUsuario(this.usuario)
      .subscribe();

  }

  seleccionImage(archivo: File) {

    if (!archivo) {
      this.imagenSubir = null;
      return;
    }
    this.imagenSubir = archivo;

    if ( archivo.type.indexOf('image') < 0 ) {
      swal('Sólo imágenes', 'El archivo seleccionado no es una imagen', 'error');
      this.imagenSubir = null;
      return;
    }

    // this.imagenSubir = archivo;

    const reader = new FileReader();
    const urlImagenTemp = reader.readAsDataURL( archivo );

    // this.imagenTemp  = reader.result;

    reader.onloadend = () => this.imagenTemp  = reader.result as string;

    //  {
    //   console.log(reader.result);
    // };
  }

  cambiarImagen() {

    this._usuarioService.cambiarImagen(this.imagenSubir, this.usuario._id);

  }

}
