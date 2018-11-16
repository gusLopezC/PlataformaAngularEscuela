var total_segs;
var total_mins;
var cronometro;
var tablero = new Array(3);
var casillapte = 9;
var jugador = 1;
var color;
var gana = 0;
var fin = false;

function jugarOtraVez() {
    jugador = 1;
    gana = 0;
    fin = null;
    casillapte = 9;
    Mensaje.style.display = "none";
    textoBoton.style.display = "none";

    ejecutar();
}

function tiraJugador2() {
    jugador = 2;
    x2 = Math.round(Math.random() * 2);
    y2 = Math.round(Math.random() * 2);
    while ((tablero[x2][y2] == 1) || (tablero[x2][y2] == 2)) {
        x2 = Math.round(Math.random() * 2);
        y2 = Math.round(Math.random() * 2);
    }
    if (fin) {
        mensajeFin();
    } else {
        SeleccionaCelda(x2, y2, jugador);
    }
    jugador = 1;
}

function SeleccionaCelda(x, y, jugador) {

    tablero[x][y] = jugador;
    PintarCelda(x, y, "white", jugador);
    casillapte--;
    Comprobar(x, y, jugador);

}

function RevisarCelda(x, y) {
    if (tablero[x][y] == 1 || tablero[x][y] == 2) {
        //alert("casilla ocupada");
        mensajeCasilla();
    } else if (fin) {
        //alert("se acabo la partida  ganó el jugador "+ jugador);
        mensajeFin();
    } else {
        jugador = 1;
        SeleccionaCelda(x, y, jugador);

        if (casillapte > 0) {
            jugador = 2;
            tiraJugador2();
        }
    }

}

function ejecutar() {
    for (i = 0; i < 3; i++) {
        tablero[i] = new Array(3);

    }


    color = "white";
    IniciarTablero(color);
}

ejecutar();