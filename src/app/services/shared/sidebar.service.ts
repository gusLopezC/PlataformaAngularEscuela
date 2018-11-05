import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  menu: any = [
    {
      titulo: 'Mantenimiento',
      icono: 'ti-harddrives',
      submenu: [
        { titulo: 'Usuarios', url: '/usuarios' },
        { titulo: 'Grupos', url: '/grupos' },
        { titulo: 'Examenes', url: '/examenes' },

      ]
    },
  ];
  constructor() { }
}
