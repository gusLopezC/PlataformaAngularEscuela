import { Injectable } from '@angular/core';
import { URL_SERVICIOS } from 'src/app/config/config';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ExamenesService {

  totalExamenes: number = 0;
  constructor(public http: HttpClient) { }

  cargarExamen() {

    const url = URL_SERVICIOS + '/api/Examenes';
    return this.http.get(url).pipe(
      map( (resp: any) => {
          this.totalExamenes = resp.total;
          return resp;
      }) );
  }

  buscarExamen(termino: string) {
    const url = URL_SERVICIOS + '/api/coleccion/examenes/' + termino;

    return this.http.get(url).pipe(
      map((resp: any) => resp.examenes ));
  }
}
