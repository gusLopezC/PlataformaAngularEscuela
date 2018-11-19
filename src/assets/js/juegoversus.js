function Comprobar(x, y, jugador) {
    if (tablero[0][0] == jugador && tablero[0][1] == jugador && tablero[0][2] == jugador) {
        gana = jugador;
    }
    if (tablero[1][0] == jugador && tablero[1][1] == jugador && tablero[1][2] == jugador) {
        gana = jugador;
    }
    if (tablero[2][0] == jugador && tablero[2][1] == jugador && tablero[2][2] == jugador) {
        gana = jugador;
    }
    if (tablero[0][0] == jugador && tablero[1][0] == jugador && tablero[2][0] == jugador) {
        gana = jugador;
    }
    if (tablero[0][1] == jugador && tablero[1][1] == jugador && tablero[2][1] == jugador) {
        gana = jugador;
    }
    if (tablero[0][2] == jugador && tablero[1][2] == jugador && tablero[2][2] == jugador) {
        gana = jugador;
    }
    if (tablero[0][0] == jugador && tablero[1][1] == jugador && tablero[2][2] == jugador) {
        gana = jugador;
    }
    if (tablero[0][2] == jugador && tablero[1][1] == jugador && tablero[2][0] == jugador) {
        gana = jugador;
    }

    if (gana == 1) {
        //alert("gana el jugador 1");
        mensaje(gana);
        fin = true;
    } else if (gana == 2) {
        //alert("gana el jugador 2");
        mensaje(gana);
        fin = true;

    } else if (casillapte == 0) {
        fin = true;
        gana = 0;
        mensaje(gana);
    }
}

function mensaje(gana) {
    if (gana != 0) {
        textoMensaje = "Gana el jugador " + gana;
        Mensaje = document.getElementById("mensaje");
        Mensaje.style.display = "block";
        Mensaje.innerHTML = textoMensaje;
        texto = "jugar otra ves";
        textoBoton = document.getElementById("boton");
        textoBoton.style.display = "block";
        textoBoton.innerHTML = texto;
    } else {

        textoMensaje = "empate";
        Mensaje = document.getElementById("mensaje");
        Mensaje.style.display = "block";
        Mensaje.innerHTML = textoMensaje;
        texto = "jugar otra ves";
        textoBoton = document.getElementById("boton");
        textoBoton.style.display = "block";
        textoBoton.innerHTML = texto;

    }
}


function mensajeFin() {
    textoMensaje = "se acabo la partida";
    Mensaje = document.getElementById("mensaje");
    Mensaje.style.display = "block";
    Mensaje.innerHTML = textoMensaje;
    Pausa();
}

function mensajeCasilla() {

    textoMensaje = "casilla ocupada";
    Mensaje = document.getElementById("mensaje");
    Mensaje.style.display = "block";
    Mensaje.innerHTML = textoMensaje;
    Pausa();
}

function Pausa() {
    segundos = 0;
    tiempo = setInterval(function() {
        while (segundos < 3) {
            segundos++;
        }
        if (segundos == 3) {
            Mensaje.style.display = "none";
        }
    }, 3000);

}