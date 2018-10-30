import { Component, OnInit } from '@angular/core';
import { Router, ActivationEnd } from '@angular/router';
import { filter, map } from 'rxjs/operators';
import { Title, Meta, MetaDefinition } from '@angular/platform-browser';

@Component({
  selector: 'app-breadcrumbs',
  templateUrl: './breadcrumbs.component.html',
  styles: []
})
export class BreadcrumbsComponent implements OnInit {

  /*
  * En este archivo modificamos el titulo de la pagina lo que hacemos es darle un valor data en page.router
  * hacemos un filtro de los eventos que se estan ejecutando y otro filtro para eliminar la ruta madre tomando
  * eñl del hijo usamos un map para tomar el valor del evento en la propiedad y se lo asignamos a titulo
  * para que cambie cada vez que se cambie de pagina.
  */

  label: string;
  constructor(private router: Router, private title: Title, private meta: Meta) {

    this.getDataRoute().subscribe(data => {
      this.label = data.titulo;
      this.title.setTitle(this.label);

      const metaTag: MetaDefinition = {
        name: 'description',
        content: this.label
      };
      this.meta.updateTag( metaTag);
    });
  }

  ngOnInit() {
  }

  getDataRoute() {

    return this.router.events.pipe(

      filter(evento => evento instanceof ActivationEnd),
      filter((evento: ActivationEnd) => evento.snapshot.firstChild === null),
      map((evento: ActivationEnd) => evento.snapshot.data)
    );

  }
}
