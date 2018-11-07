import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { URL_SERVICIOS } from 'src/app/config/config';
import { Usuario } from 'src/app/models/usuario.model';
import { Grupos } from '../../models/grupos.model';
import { Examenes } from 'src/app/models/examenes.model';

@Component({
  selector: 'app-busqueda',
  templateUrl: './busqueda.component.html',
  styleUrls: []
})
export class BusquedaComponent implements OnInit {

  usuarios: Usuario[] = [];
  grupos: Grupos[] = [];
  examenes: Examenes[] = [];


  constructor(
    public activatedRoute: ActivatedRoute,
    public http: HttpClient
  ) {

    activatedRoute.params.subscribe(params => {
      const termino = params['termino'];
      this.buscar(termino);
    });
  }

  ngOnInit() {
  }

  buscar(termino: string) {
    const url = URL_SERVICIOS + '/api/todo/' + termino;

    this.http.get(url).subscribe((resp: any) => {
            console.log(resp);
            this.usuarios = resp.usuarios;
            this.grupos = resp.grupos;
            this.examenes = resp.examenes;
      });

  }

}
