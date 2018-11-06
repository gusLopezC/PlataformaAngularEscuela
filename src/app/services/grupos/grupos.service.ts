import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Router } from '@angular/router';
import { URL_SERVICIOS } from '../../config/config';
import { map } from 'rxjs/operators';
import { UsuarioService } from '../usuario/usuario.service';
import { Grupos } from '../../models/grupos.model';

@Injectable({
  providedIn: 'root'
})
export class GruposService {

  totalGrupos: number = 0;
  token: string;

  constructor(
    public http: HttpClient,
    public _usuarioService: UsuarioService,
    public router: Router) { }

  cargarGrupos() {

    const url = URL_SERVICIOS + '/api/Grupos';
    return this.http.get(url).pipe(

      map((resp: any) => {
        this.totalGrupos = resp.total;
        return resp;
      }
      ));
  }

  obtenerGrupos(id: string) {
    const url = URL_SERVICIOS + '/api/BuscarGrupo/' + id;
    return this.http.get(url).pipe(

      map((resp: any) => {
        return resp.grupos;
      }
      ));
  }



  crearGrupos(nombre: string) {

    const url = URL_SERVICIOS + '/api/Grupos';
    const usuario = localStorage.getItem('_id');

    return this.http.post(url, {nombre, usuario} ).pipe(
      map((resp: any) => resp.grupoGuardado ));
  }

  buscarGrupos(termino: string) {
    const url = URL_SERVICIOS + '/api/coleccion/grupos/' + termino;

    return this.http.get(url).pipe(
      map((resp: any) => resp.grupos
      ));
  }

  actualizarGrupos(grupos: Grupos) {

    const url = URL_SERVICIOS + '/api/Grupos/' + grupos._id;

    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', this._usuarioService.token);


    return this.http.put(url, grupos, { headers }).pipe(
      map((resp: any) => {
        swal('Grupo Actualizado', grupos.nombre, 'success');
        return resp.grupoActualizado;
      }));
  }

  borrarGrupos(id: string) {

    const url = URL_SERVICIOS + '/api/Grupos/' + id;
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', this._usuarioService.token);

    return this.http.delete(url, { headers }).pipe(
      map((resp: any) => {
        swal('Grupo Eliminado', 'El grupo se elimino correctamente', 'success');
        return true;
      }));
  }
}
