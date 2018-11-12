import { Injectable } from '@angular/core';
import { Usuario } from 'src/app/models/usuario.model';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { URL_SERVICIOS } from '../../config/config';
import { map, catchError } from 'rxjs/operators';
import {throwError } from 'rxjs/internal/observable/throwError';
import { Router } from '@angular/router';
import { SubirArchivoService } from '../subir-archivo/subir-archivo.service';
import 'rxjs/add/operator/catch';

@Injectable({
  providedIn: 'root'
})
export class UsuarioService {

  seleccionUsuario: Usuario;
  token: string;
  menu: any[] = [];

  constructor(public http: HttpClient, public router: Router, public _subirArchivoService: SubirArchivoService) {
    this.cargarStorage();

  }

  guardarStorage(id: string, token: string, seleccionUsuario: Usuario, menu: any) {
    localStorage.setItem('_id', seleccionUsuario._id);
    localStorage.setItem('token', token);
    localStorage.setItem('seleccionUsuario', JSON.stringify(seleccionUsuario));
    localStorage.setItem('menu', JSON.stringify(menu));

    this.seleccionUsuario = seleccionUsuario;
    this.token = token;
    this.menu = menu;
  }

  cargarStorage() {

    if (localStorage.getItem('token')) {
      this.token = localStorage.getItem('token');
      this.seleccionUsuario = JSON.parse(localStorage.getItem('seleccionUsuario'));
      this.menu = JSON.parse(localStorage.getItem('menu'));
    } else {
      this.token = '';
      this.seleccionUsuario = null;
      this.menu = [null];
    }
  }

  loginGoogle(tokengoogle: string) {

    const url = URL_SERVICIOS + '/api/LoginGoogle';
    return this.http.post(url, { tokengoogle }).pipe(
      map((resp: any) => {
        this.guardarStorage(resp._id, resp.token, resp.seleccionUsuario, resp.menu);
        console.log(resp);
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
        this.guardarStorage(resp.id, resp.token, resp.seleccionUsuario, resp.menu);
        console.log(resp);
        return true;
      }),
      catchError( error => {
        console.log(error.error.mensaje);
        swal('Usuario o contraseña incorrecta', error.error.mensaje, 'error');
      return throwError(error);
      }));

  }

  logout() {
    this.token = '';
    this.seleccionUsuario = null;
    this.menu = [];

    localStorage.removeItem('token');
    localStorage.removeItem('seleccionUsuario');
    localStorage.removeItem('menu');

    this.router.navigate(['/login']);
  }

  crearUsuario(usuario: Usuario) {

    const url = URL_SERVICIOS + '/api/Usuarios';
    return this.http.post(url, usuario).pipe(
      map((resp: any) => {
        swal('Usuario creado', usuario.email, 'success');
        return resp.usuario;
      })
      ,
      catchError( error => {
        console.log(error.error.mensaje);
        swal('No se a podido guardar el usuario', error.error.mensaje, 'error');
      return throwError(error);
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

        if (usuario._id === this.seleccionUsuario._id) {
          const usuarioDB: Usuario = resp.usuarioActualizado;
          this.guardarStorage(usuarioDB._id, this.token, usuario, this.menu);
        }

        swal('Usuario actualizado', usuario.name, 'success');
        return true;
      }));
  }

  cambiarImagen(archivo: File, id: string) {

    this._subirArchivoService.subirArchivo(archivo, 'usuarios', id)
      .then((resp: any) => {

        this.seleccionUsuario.imagen = resp.usuarioActualizado.imagen;
        swal('Imagen Actualizada', this.seleccionUsuario.name, 'success');

        this.guardarStorage(id, this.token, this.seleccionUsuario, this.menu);

      })
      .catch(resp => {
        console.log(resp);
      });

  }

  cargarUsuarios(desde: number = 0) {
    const url = URL_SERVICIOS + '/api/Usuarios?desde=' + desde;

    return this.http.get(url);
  }

  buscarUsuarios(termino: string) {

    const url = URL_SERVICIOS + '/api/coleccion/usuarios/' + termino;

    return this.http.get(url).pipe(
      map((resp: any) => resp.usuarios));
  }

  borrarUsuario(id: string) {

    const url = URL_SERVICIOS + '/api/Usuarios/' + id;

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', this.token);

    return this.http.delete(url, { headers }).pipe(
      map((resp: any) => {
        swal('Usuario Eliminado', 'El usuario se elimino correctamente', 'success');
        return true;
      }));

  }
}
