import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  seleccionUsuario: Usuario;
  token: string;


  constructor(public http: HttpClient, public router: Router, public _subirArchivoService: SubirArchivoService) {
    this.cargarStorage();

  }

  guardarStorage(id: string, token: string, seleccionUsuario: Usuario) {
    localStorage.setItem('_id', seleccionUsuario._id);
    localStorage.setItem('token', token);
    localStorage.setItem('seleccionUsuario', JSON.stringify(seleccionUsuario));

    this.seleccionUsuario = seleccionUsuario;
    this.token = token;
  }

  cargarStorage() {

    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.seleccionUsuario = JSON.parse(localStorage.getItem('seleccionUsuario'));
    } else {
      this.token = '';
      this.seleccionUsuario = null;
    }
  }

  loginGoogle(tokengoogle: string) {

    const url = URL_SERVICIOS + '/api/LoginGoogle';
    return this.http.post(url, { tokengoogle }).pipe(
      map((resp: any) => {
        this.guardarStorage(resp._id, resp.token, resp.seleccionUsuario);
        return true;
      }));
  }

  login(usuario: Usuario, recordar: boolean = false) {

    if (recordar) {
      localStorage.setItem('email', usuario.email);
    } else {
      localStorage.removeItem('email');
    }

    const url = URL_SERVICIOS + '/api/Login';
    return this.http.post(url, usuario).pipe(
      map((resp: any) => {
        this.guardarStorage(resp.id, resp.token, resp.seleccionUsuario);
        // localStorage.setItem('id', resp.id);
        // localStorage.setItem('token', resp.token);
        // localStorage.setItem('seleccionUsuario', JSON.stringify(resp.seleccionUsuario));

        return true;
      }));

  }

  logout() {
    this.token = '';
    this.seleccionUsuario = null;
    localStorage.removeItem('token');
    localStorage.removeItem('seleccionUsuario');
    localStorage.removeItem('token');
    localStorage.removeItem('seleccionUsuario');
    this.router.navigate(['/login']);


  }

  crearUsuario(usuario: Usuario) {

    const url = URL_SERVICIOS + '/api/Usuarios';
    return this.http.post(url, usuario).pipe(
      map((resp: any) => {
        swal('Usuario creado', usuario.email, 'success');
        return resp.usuario;
      }));
  }

  estaLogueado() {
    return (this.token.length > 8) ? true : false;
  }


  actualizarUsuario(usuario: Usuario) {

    const url = URL_SERVICIOS + '/api/Usuarios/' + usuario._id;

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', this.token);

    return this.http.put(url, usuario, { headers }).pipe(
      map((resp: any) => {

        const usuarioDB: Usuario = resp.usuarioActualizado;
        this.guardarStorage(usuarioDB._id, this.token,  usuario);

        swal('Usuario actualizado', usuario.name, 'success');
        return true;
      }));
  }

  cambiarImagen( archivo: File, id: string ) {

    this._subirArchivoService.subirArchivo( archivo, 'usuarios', id )
          .then( (resp: any) => {

            this.seleccionUsuario.imagen = resp.usuarioActualizado.imagen;
            swal( 'Imagen Actualizada', this.seleccionUsuario.name, 'success' );

            this.guardarStorage( id, this.token, this.seleccionUsuario );

          })
          .catch( resp => {
            console.log( resp );
          }) ;

  }
}
