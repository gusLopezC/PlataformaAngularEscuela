import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-compartiractividad',
  templateUrl: './compartiractividad.component.html',
  styleUrls: ['./compartiractividad.component.css']
})
export class CompartiractividadComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }


  generarLink() {
    swal('Código activo 5BEF4344', 'http://goo.gl/lkb34zs3', 'success');
  }
}
