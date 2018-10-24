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
}
