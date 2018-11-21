import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { UsuarioService } from '../usuario/usuario.service';
import { Examenes } from 'src/app/models/examenes.model';

@Injectable({
  providedIn: 'root'
})
export class ExamenesService {

  totalExamenes: number = 0;
  constructor(public http: HttpClient, public _usuarioService: UsuarioService) { }

  cargarExamen() {

    const url = URL_SERVICIOS + '/api/Examenes';
    return this.http.get(url).pipe(
      map((resp: any) => {
        this.totalExamenes = resp.total;
        return resp;
      }));
  }

  buscarExamen(termino: string) {
    const url = URL_SERVICIOS + '/api/coleccion/examenes/' + termino;

    return this.http.get(url).pipe(
      map((resp: any) => resp.examenes));
  }

  obtenerExamen(id: string) {
    const url = URL_SERVICIOS + '/api/BuscarExamen/' + id;
    return this.http.get(url).pipe(

      map((resp: any) => {
        return resp.examen;
      }
      ));
  }

  borrarExamen(id: string) {

    const url = URL_SERVICIOS + '/api/Examenes/' + id;
    let headers = new HttpHeaders();
    headers = headers.set('Content-Type', 'application/json; charset=utf-8');
    headers = headers.set('Authorization', this._usuarioService.token);

    return this.http.delete(url, { headers }).pipe(
      map((resp: any) => {
        swal('Examen Eliminado', 'El grupo se elimino correctamente', 'success');
        return true;
      }));
  }


  guardarExamen(examen: Examenes) {

    const idUser = localStorage.getItem('_id');
    examen.usuario = idUser;

    let url = URL_SERVICIOS + '/api/Examenes/';

    if (examen._id) {
      // actualizando
      url += '/' + examen._id;

      return this.http.put(url, examen).pipe(
        map((resp: any) => {
          swal('Examen Actualizado', examen.nombre, 'success');
          return resp.examenGuardado;
        }));

    } else {
      // creando
      return this.http.post(url, examen).pipe(
        map((resp: any) => {
          swal('Examen Creado', examen.nombre, 'success');
          return resp.examenGuardado;
        }));
    }
  }

}
