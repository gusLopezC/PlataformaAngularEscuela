/*function IniciarTablero(){
	for(i=0;i<2;i++){
		for(j=0;j<2;j++)
		{
			tablero [i][j]=0;
		}
}
}*/

function IniciarTablero(color) {
    for (i = 0; i < 3; i++) {
        for (j = 0; j < 3; j++) {
            tablero[i][j] = 0;
            celda = document.getElementById("c" + i + j);
            celda.innerHTML = "";
            celda.style.background = color;
        }
    }
}

function PintarCelda(x, y, color) {
    celda = document.getElementById("c" + x + y);
    celda.style.background = color;
    if (jugador == 1) {
        celda.innerHTML = "<img src='assets/images/tache2.PNG'></img>";
    } else {
        celda.innerHTML = "<img src='assets/images/CIRCULO2.PNG'></img>";
    }
}