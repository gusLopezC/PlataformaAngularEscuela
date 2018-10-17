import { Component, OnInit, OnDestroy } from '@angular/core';
import { Observable, Subscriber, Subscription } from 'rxjs';
import { retry, map, filter } from 'rxjs/operators';

@Component({
    selector: 'app-rxjs',
    templateUrl: './rxjs.component.html',
    styles: []
})
export class RxjsComponent implements OnInit , OnDestroy {

  subscription: Subscription;

    constructor() {
        /*
        * @note Metodo Retry define cuantos intentos se repetira el obersable empezando del segundo ciclo
          this.regresaObservable().pipe(
            retry(3)
          ).subscribe(
            numero => console.log('Subs', numero.toExponential),
            error => console.error('Error en el obs', error),
            () => console.log('El observador termino')
          );
        }*/

        // * @note Metodo Map convierte un objeto a un valor permite trabajar con menos codigo
       this.subscription = this.regresaObservable()
            .subscribe(
                numero => console.log('Subs', numero),
                error => console.error('Error en el obs', error),
                () => console.log('El observador termino')
            );
    }

    ngOnInit() {
    }

    ngOnDestroy() {
      console.log('La pagina se va a cerrar');
      this.subscription.unsubscribe();
    }

    regresaObservable(): Observable<any> {

        return new Observable((observer: Subscriber<any>) => {

            let contador = 0;

            const intervalo = setInterval(() => {

                contador++;

                const salida = {
                    valor: contador
                };
                observer.next(salida);

                // if (contador === 3) {
                //     clearInterval(intervalo);
                //     observer.complete();
                // }
                // if (contador === 2) {
                //   // clearInterval(intervalo);
                //   observer.error('Ya fue');
                // }

            }, 1000);
        }).pipe(
            map(resp => resp.valor),
            /**
            * Metodo filter muestra filtra un solo resultado tiene que devolver true o false
            */

            filter((valor, index) => {
                // console.log('filter', valor, index);
                if ((valor % 2 === 1)) {
                    return true;
                } else {
                    return false;
                }
            })
        );
    }
}
