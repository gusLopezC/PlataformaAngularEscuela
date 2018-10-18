import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    public http: HttpClient
  ) {
    console.log('Servicio listo a usar');
  }

  crearUsuario( usuario: Usuario) {

  const url = URL_SERVICIOS + '/api/Usuarios';
  console.log(usuario);
  return this.http.post(url, usuario);
  }
}
