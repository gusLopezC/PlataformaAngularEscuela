import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NgForm } from '@angular/forms';
import { UsuarioService } from '../services/services.index';
import { Usuario } from 'src/app/models/usuario.model';
import { element } from 'protractor';

declare function init_plugins();
declare const gapi: any;

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  recuerdame: boolean = false;
  email: string;
  auth2: any;


  constructor(
    public router: Router,
    public _usuarioService: UsuarioService
  ) { }

  ngOnInit() {
    init_plugins();
    this.googleInit();

    this.email = localStorage.getItem('email') || '';
    if (this.email.length > 1) {
      this.recuerdame = true;
    }
  }

  googleInit() {

    gapi.load('auth2', () => {
      this.auth2 = gapi.auth2.init({
        client_id: '416723021638-3hsf97fk8ok4qljh6v4crv8eiv5o764i.apps.googleusercontent.com',
        cookiepolicy: 'single_host_origin',
        scope: 'profile email'
      });
      this.attachSingin(document.getElementById('btnGoogle'));
    });
  }

  // tslint:disable-next-line:no-shadowed-variable
  attachSingin(element) {
    this.auth2.attachClickHandler(element, {}, (googleUser) => {

      const profile = googleUser.getBasicProfile();
      const tokengoogle = googleUser.getAuthResponse().id_token;

      this._usuarioService.loginGoogle(tokengoogle)
        .subscribe(() => window.location.href = '#/dashboard');
      // console.log(profile, tokengoogle);
    });
  }


  ingresar(forma: NgForm) {

    if (forma.invalid) {
      return;
    }

    const usuario = new Usuario(null, forma.value.email, forma.value.password, );

    this._usuarioService.login(usuario, forma.value.recuerdame)
      .subscribe(correcto => this.router.navigate(['/dashboard']));

    // console.log(forma.valid);
    //  console.log(forma.value);
    // this.router.navigate([ '/dashboard' ]);

  }

}
