import { Pipe, PipeTransform } from '@angular/core';
import { URL_SERVICIOS } from '../config/config';

@Pipe({
  name: 'imagen'
})
export class ImagenPipe implements PipeTransform {

  transform(imagen: string, tipo: string = 'usuario'): any {

    let url = URL_SERVICIOS + '/api/img';

    if (!imagen) {
      return url + '/usuarios/xxx';
    }

    if (imagen.indexOf('https') >= 0) {
      return imagen;
    }

    switch (tipo) {

      case 'usuarios':
        url += '/usuarios/' + imagen;
        break;
      case 'grupos':
        url += '/grupos/' + imagen;
        break;
      case 'examenes':
        url += '/examenes/' + imagen;
        break;
      default:
        console.log('Tipo de imagen no existe');
        url += '/usuarios/xxx';
    }

    return url;
  }

}
