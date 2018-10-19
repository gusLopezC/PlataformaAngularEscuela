import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  constructor(
    public http: HttpClient
  ) {
    // console.log('Servicio listo a usar');
  }

  login(usuario: Usuario, recordar: boolean = false) {
    console.log('ENTRA LOGIN');
    const url = URL_SERVICIOS + '/api/Login';
    return this.http.post(url, usuario);

  }

  crearUsuario(usuario: Usuario) {

    const url = URL_SERVICIOS + '/api/Usuarios';
    return this.http.post(url, usuario).pipe(
      map((resp: any) => {
        swal('Usuario creado', usuario.email, 'success');
        return resp.usuario;
      }));
  }

}
