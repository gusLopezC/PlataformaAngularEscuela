import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(imagen: string, tipo: string = 'usuario'): any {

    let url = URL_SERVICIOS + '/api/img';

    if (!imagen) {
      return url + '/usuarios/aaa';
    }

    if (imagen.indexOf('https') >= 0) {
      return imagen;
    }
    switch (tipo) {

      case 'usuario':
        url += '/usuarios/' + imagen;
        break;
      case 'grupo':
        url += '/grupos/' + imagen;
        break;
      case 'examen':
        url += '/examenes/' + imagen;
        break;
      default:
        url += '/usuarios/aaa';

    }
   console.log(url);
    return url;
  }

}
