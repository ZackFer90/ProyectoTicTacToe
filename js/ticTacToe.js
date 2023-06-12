/// creamos una funcion que nos gestionara un numero aleatorio para el bot

const randMinMax = (min, max) => Math.round(Math.random()*(max-min)+min);

// document.getElementById("").innerHTML
// Array que impedira que entre otra vez si cumple cierta condicion

let arrayEntrar = [true, true, true, true, true, true, true, true];

// function ganador(gana){
//     console.log("Function: " + gana[0][0].innerHTML);
//     if(gana[0][0] == gana[0][1] && gana[0][0] == gana[0][2]){
//         user.winner = gana[0][0];
//         console.log("Entra: " + user.winner);
//         // sessionStorage.setItem("clave", JSON.stringify(user));
//         // window.location.assign("ganador.html");
//     }

// }

///Esta funcion nos comprueba 3 campos que recibimos si son iguales

function compararId(id1, id2, id3){
        if(id1 == id2 && id1 == id3){
            usuario.winner = id1;
            sessionStorage.setItem("clave", JSON.stringify(usuario));
            window.location.assign("ganador.html");
        }
}

///Comprobamos si los campos en linia estan vacios o no, en caso de estar llenos no reenvia a otra funcion

function casillasLlenas(casillas){
    
///Horizontales
    if(casillas[0][0].innerHTML != "" && casillas[0][1].innerHTML != "" && casillas[0][2].innerHTML != "" && arrayEntrar[0]){
        let idFicha0 = casillas[0][0].querySelector('img').getAttribute('id');
        let idFicha1 = casillas[0][1].querySelector('img').getAttribute('id');
        let idFicha2 = casillas[0][2].querySelector('img').getAttribute('id');
        compararId(idFicha0, idFicha1, idFicha2);
        arrayEntrar[0] = false;
    }

    if(casillas[1][0].innerHTML != "" && casillas[1][1].innerHTML != "" && casillas[1][2].innerHTML != "" && arrayEntrar[1]){
        let idFicha0 = casillas[1][0].querySelector('img').getAttribute('id');
        let idFicha1 = casillas[1][1].querySelector('img').getAttribute('id');
        let idFicha2 = casillas[1][2].querySelector('img').getAttribute('id');
        compararId(idFicha0, idFicha1, idFicha2);
        arrayEntrar[1] = false;
    }

    if(casillas[2][0].innerHTML != "" && casillas[2][1].innerHTML != "" && casillas[2][2].innerHTML != "" && arrayEntrar[2]){
        let idFicha0 = casillas[2][0].querySelector('img').getAttribute('id');
        let idFicha1 = casillas[2][1].querySelector('img').getAttribute('id');
        let idFicha2 = casillas[2][2].querySelector('img').getAttribute('id');
        compararId(idFicha0, idFicha1, idFicha2);
        arrayEntrar[2] = false;
    }

///Verticales
    if(casillas[0][0].innerHTML != "" && casillas[1][0].innerHTML != "" && casillas[2][0].innerHTML != "" && arrayEntrar[3]){
        let idFicha0 = casillas[0][0].querySelector('img').getAttribute('id');
        let idFicha1 = casillas[1][0].querySelector('img').getAttribute('id');
        let idFicha2 = casillas[2][0].querySelector('img').getAttribute('id');
        compararId(idFicha0, idFicha1, idFicha2);
        arrayEntrar[3] = false;
    }

    if(casillas[0][1].innerHTML != "" && casillas[1][1].innerHTML != "" && casillas[2][1].innerHTML != "" && arrayEntrar[4]){
        let idFicha0 = casillas[0][1].querySelector('img').getAttribute('id');
        let idFicha1 = casillas[1][1].querySelector('img').getAttribute('id');
        let idFicha2 = casillas[2][1].querySelector('img').getAttribute('id');
        compararId(idFicha0, idFicha1, idFicha2);
        arrayEntrar[4] = false;
    }

    if(casillas[0][2].innerHTML != "" && casillas[1][2].innerHTML != "" && casillas[2][2].innerHTML != "" && arrayEntrar[5]){
        let idFicha0 = casillas[0][2].querySelector('img').getAttribute('id');
        let idFicha1 = casillas[1][2].querySelector('img').getAttribute('id');
        let idFicha2 = casillas[2][2].querySelector('img').getAttribute('id');
        compararId(idFicha0, idFicha1, idFicha2);
        arrayEntrar[5] = false;
    }

///Diagonal
    if(casillas[0][0].innerHTML != "" && casillas[1][1].innerHTML != "" && casillas[2][2].innerHTML != "" && arrayEntrar[6]){
        let idFicha0 = casillas[0][0].querySelector('img').getAttribute('id');
        let idFicha1 = casillas[1][1].querySelector('img').getAttribute('id');
        let idFicha2 = casillas[2][2].querySelector('img').getAttribute('id');
        compararId(idFicha0, idFicha1, idFicha2);
        arrayEntrar[6] = false;
    }

    if(casillas[0][2].innerHTML != "" && casillas[1][1].innerHTML != "" && casillas[2][0].innerHTML != "" && arrayEntrar[7]){
        let idFicha0 = casillas[0][2].querySelector('img').getAttribute('id');
        let idFicha1 = casillas[1][1].querySelector('img').getAttribute('id');
        let idFicha2 = casillas[2][0].querySelector('img').getAttribute('id');
        compararId(idFicha0, idFicha1, idFicha2);
        arrayEntrar[7] = false;
    }
}

///Metemos la cuadricula de 3x3 en un array bidimensional

function ganadorEmpate(array){

    let arrayPosiciones = [  [array[0] , array[1], array[2]],
     [array[3] , array[4], array[5]],
      [array[6] , array[7], array[8]]
    ];

    casillasLlenas(arrayPosiciones);

    setTimeout(() => {
        let empate = 0;
    for (const casilla of array) {
        
        if (casilla.innerHTML != ""){

            if(empate == 8){
                usuario.winner = "Empate";
                sessionStorage.setItem("clave", JSON.stringify(usuario));
                window.location.assign("ganador.html");
            }
            empate++;
        }
    }
    }
    , 5000);
}

// Nos traemos un objetos con diversos datos

let usuario = JSON.parse(sessionStorage.getItem("clave"));

// Recogemos las 9 celdas del tres en raya en cajas

const cajas = document.getElementsByClassName("celda");

// Con este boolean cambiaremos de jugador

let cambiarJugador = true;

// Gestionamos los turnos de los dos jugadores

function cambiarTurno(jugador1, jugador2, caja) {
    if(cambiarJugador){
        if(caja.innerHTML == ""){
            caja.innerHTML = `<img src="${jugador1.imagen}" class="${jugador1.clase}" id="${jugador1.nombre}"/>`;
            cambiarJugador = false;
            document.getElementById("jug2").style.backgroundColor = "green";
            document.getElementById("jug1").style.backgroundColor = "white";
        }
    }else{
        if(caja.innerHTML == ""){
            caja.innerHTML = `<img src="${jugador2.imagen}" class="${jugador2.clase}" id="${jugador2.nombre}"/>`;
            cambiarJugador = true;
            document.getElementById("jug1").style.backgroundColor = "green";
            document.getElementById("jug2").style.backgroundColor = "white";
        }
    }
}

let cont = 0;

function cambiarTurnoConBot(jugador1, jugador2, caja, cajas){
    cambiarJugador = "false";
    console.log(cambiarJugador);

    if(caja.innerHTML == ""){
        caja.innerHTML = `<img src="${jugador1.imagen}" class="${jugador1.clase}" id="${jugador1.nombre}"/>`;
        ganadorEmpate(cajas);
        cambiarJugador = "true";
    }
    console.log(cambiarJugador);
    if(cont < 4 && cambiarJugador == "true"){
        console.log(cont);
        turnoBot(jugador2, cajas);
        cont++;
    }
}

const turnoBot = (jugador2, cajas) => {
    let posicion;
    let caja = "";
    do{
        posicion = randMinMax(0, 8);
        caja = cajas[posicion];
    }while(caja.innerHTML != "")

    caja.innerHTML = `<img src="${jugador2.imagen}" class="${jugador2.clase}" id="${jugador2.jugador}"/>`;
};

// Mediante esta funcion Gestionamos la Posicion del bot en el tablero y si hay un bot

function quienesJuegan(){
    let posicion;
    if(usuario.bot.boton == ""){
        // Mostramos a trabes del input los datos recogidos por el session

        document.getElementById("jug1").innerHTML = usuario.jugador1.jugador;
        document.getElementById("jug2").innerHTML = usuario.jugador2.jugador;
        posicion = 1;
    }else if(usuario.bot.boton == "Boton1"){
        document.getElementById("jug1").innerHTML = usuario.bot.nombre;
        document.getElementById("jug2").innerHTML = usuario.jugador2.jugador;
        document.getElementById("ficha1").innerHTML = `<div class="plataformaDedede"><img src="${usuario.bot.imagen}" class="metaJug" /></div>`;
        posicion = 2;
    }else if(usuario.bot.boton == "Boton2"){
        document.getElementById("jug1").innerHTML = usuario.jugador1.jugador;
        document.getElementById("jug2").innerHTML = usuario.bot.nombre;
        document.getElementById("ficha2").innerHTML = `<div class="plataformaDedede"><img src="${usuario.bot.imagen}" class="metaJug" /></div>`;
        posicion = 3;
    }
    return posicion;
}

// Añadimos dos booleanos, uno para que nos comprueba si esta jugando el bot solo una vez y el otro
// para que dependiendo si esta el bot o no, nos ejecute diferentes funciones de como insertar la ficha
let quienJuega = true;
let jugadorOBot = 1;

function empiezaJuego(){
    let jugador1;
    let jugador2;
    if(quienJuega){
        switch (quienesJuegan()) {
            case 1:
                jugador1 = usuario.jugador1;
                jugador2 = usuario.jugador2;
                document.getElementById("jug1").style.backgroundColor = "green";
                break;
            case 2:
                jugador1 = usuario.bot;
                jugador2 = usuario.jugador2;
                jugadorOBot = 2;
                break;
            case 3:
                jugador1 = usuario.jugador1;
                jugador2 = usuario.bot;
                jugadorOBot = 3;
                break;
        }
        quienJuega = false;
    }
// Con el forof recorremos todas las cajas del 3 en raya
    for (const caja of cajas) {
        caja.addEventListener("click", () => {
            if(jugadorOBot == 1){
                // console.log("Jugadores");
                cambiarTurno(jugador1, jugador2, caja);
            }else if(jugadorOBot == 2){
                // console.log("Jugador y bot");
                cambiarTurnoConBot(jugador2, jugador1, caja, cajas);
            }else if(jugadorOBot == 3){
                // console.log("Jugador y bot");
                cambiarTurnoConBot(jugador1, jugador2, caja, cajas);
            }
            ganadorEmpate(cajas);
        });
    }
}

empiezaJuego();