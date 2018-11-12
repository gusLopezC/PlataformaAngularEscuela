import { Component, OnInit } from '@angular/core';


declare function init_plufins();
@Component({
  selector: 'app-nopagefound',
  templateUrl: './nopagefound.component.html',
  styleUrls: ['./nopagefound.component.css']
})
export class NopagefoundComponent implements OnInit {

  constructor() { }

  ngOnInit() {
    // init_plufins();
  }

}
