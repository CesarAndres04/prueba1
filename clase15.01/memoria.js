let simbolosDisponibles = ["&#128511;", "&#128534;", "&#128533;"]
let listaCasillas = []
let numeroTurno = 1
let casillaTurnoAnterior = null
function crearCasillas(){
    
    let cont =0
    
    for (let i = 0; i <simbolosDisponibles.length; i++) {
        let casilla1 = {
            
            simbolo : simbolosDisponibles[i],
            mostrarSimbolo : false
        }
        let casilla2 ={
            
            simbolo : simbolosDisponibles[i],
            mostrarSimbolo : false
        }
        listaCasillas.push(casilla1)
        listaCasillas.push(casilla2)
    }
}

function devolverCasilla(row,col){
    const pos = (row * 3)+ col
    return listaCasillas[pos]

}

function ponerSimbolosCasillas(){
    for(let i = 0; i < 2 ; i++){
        for(let j = 0; j < 3 ; j++){
            const but = document.getElementById(i +"_"+j)
            const casilla = devolverCasilla(i,j)
            if (casilla.mostrarSimbolo) {
               but.innerHTML = casilla.simbolo
            }else {
                but.innerHTML = "gay"
            }
        }
    }
}

function casillaOnClick(row, col) {
    const casillaSeleccionada = devolverCasilla(row, col);

    if (numeroTurno === 1) {
        casillaSeleccionada.mostrarSimbolo = true;
        casillaTurnoAnterior = casillaSeleccionada;
        numeroTurno = 2;
    } else {
        casillaSeleccionada.mostrarSimbolo = true;

        if (casillaTurnoAnterior.simbolo !== casillaSeleccionada.simbolo) {
            ponerSimbolosCasillas();
            setTimeout(function () {
                casillaSeleccionada.mostrarSimbolo = false;
                casillaTurnoAnterior.mostrarSimbolo = false;
                ponerSimbolosCasillas();
                casillaTurnoAnterior = null;
                numeroTurno = 1;
            }, 2000);
        } else {
            casillaTurnoAnterior = null;
            numeroTurno = 1;
            ponerSimbolosCasillas();
        }
    }
}
function main(){
    crearCasillas()
    ponerSimbolosCasillas()
    
    const body = document.getElementById("cuerpo")
    const div = document.createElement("div")
    div.innerHTML= "este es un mensaje"
    div.attributes("class")
    
}

main()