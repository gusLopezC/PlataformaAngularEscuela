import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators } from '@angular/forms';
import swal from 'sweetalert';
import { UsuarioService } from '../services/services.index';
import { Usuario } from 'src/app/models/usuario.model';
import { Router } from '@angular/router';



declare function init_plugins();
@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./login.component.css']
})
export class RegisterComponent implements OnInit {

  forma: FormGroup;

  constructor(
    public _usuarioService: UsuarioService,
    public router: Router
  ) { }

  sonIguales(campo1: string, campo2: string) {

    return (group: FormGroup) => {

      const pass1 = group.controls[campo1].value;
      const pass2 = group.controls[campo2].value;

      if (pass1 === pass2) {
        return null;
      }

      return {
        sonIguales: true
      };

    };

  }

  ngOnInit() {
    init_plugins();

    this.forma = new FormGroup({
      name: new FormControl(null, Validators.required),
      email: new FormControl(null, [Validators.required, Validators.email]),
      password: new FormControl(null, Validators.required),
      password2: new FormControl(null, Validators.required),
      condiciones: new FormControl(false)
    }, { validators: this.sonIguales('password', 'password2') });


    this.forma.setValue({
      name: 'Test ',
      email: 'test@test.com',
      password: '123456',
      password2: '123456',
      condiciones: true
    });
  }


  registrarUsuario() {
    // console.log('Entra a registro');
    if (this.forma.invalid) {
      console.log('Importante', 'No valido');
      return;
    }

    if (!this.forma.value.condiciones) {
      swal('Importante', 'Debes de aceptar las condiciones', 'warning');
      return;
    }
    console.log('Formulario valido', this.forma.valid);
    console.log(this.forma.value);


    const usuario = new Usuario(
      this.forma.value.name,
      this.forma.value.email,
      this.forma.value.password
    );

    this._usuarioService.crearUsuario(usuario)
      .subscribe( respo => this.router.navigate(['/login']));
  }
}
