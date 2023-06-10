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

function ganadorTresCampos(campo1, campo2, campo3){
        if(campo1 == campo2 && campo1 == campo3){
            console.log("Campo lleno " + campo1);
            user.winner = campo1;
            sessionStorage.setItem("clave", JSON.stringify(user));
            window.location.assign("ganador.html");
        }
}

///Comprobamos si los campos en linia estan vacios o no, en caso de estar llenos no reenvia a otra funcion

function campoLleno(campos){
    
///Horizontales
    if(campos[0][0].innerHTML != "" && campos[0][1].innerHTML != "" && campos[0][2].innerHTML != "" && arrayEntrar[0]){
        ganadorTresCampos(campos[0][0].querySelector('img').getAttribute('id'), campos[0][1].querySelector('img').getAttribute('id'), campos[0][2].querySelector('img').getAttribute('id'));
        arrayEntrar[0] = false;
    }

    if(campos[1][0].innerHTML != "" && campos[1][1].innerHTML != "" && campos[1][2].innerHTML != "" && arrayEntrar[1]){
        ganadorTresCampos(campos[1][0].querySelector('img').getAttribute('id'), campos[1][1].querySelector('img').getAttribute('id'), campos[1][2].querySelector('img').getAttribute('id'));
        arrayEntrar[1] = false;
    }

    if(campos[2][0].innerHTML != "" && campos[2][1].innerHTML != "" && campos[2][2].innerHTML != "" && arrayEntrar[2]){
        ganadorTresCampos(campos[2][0].querySelector('img').getAttribute('id'), campos[2][1].querySelector('img').getAttribute('id'), campos[2][2].querySelector('img').getAttribute('id'));
        arrayEntrar[2] = false;
    }

///Verticales
    if(campos[0][0].innerHTML != "" && campos[1][0].innerHTML != "" && campos[2][0].innerHTML != "" && arrayEntrar[3]){
        ganadorTresCampos(campos[0][0].querySelector('img').getAttribute('id'), campos[1][0].querySelector('img').getAttribute('id'), campos[2][0].querySelector('img').getAttribute('id'));
        arrayEntrar[3] = false;
    }

    if(campos[0][1].innerHTML != "" && campos[1][1].innerHTML != "" && campos[2][1].innerHTML != "" && arrayEntrar[4]){
        ganadorTresCampos(campos[0][1].querySelector('img').getAttribute('id'), campos[1][1].querySelector('img').getAttribute('id'), campos[2][1].querySelector('img').getAttribute('id'));
        arrayEntrar[4] = false;
    }

    if(campos[0][2].innerHTML != "" && campos[1][2].innerHTML != "" && campos[2][2].innerHTML != "" && arrayEntrar[5]){
        ganadorTresCampos(campos[1][2].querySelector('img').getAttribute('id'), campos[1][2].querySelector('img').getAttribute('id'), campos[2][2].querySelector('img').getAttribute('id'));
        arrayEntrar[5] = false;
    }

///Diagonal
    if(campos[0][0].innerHTML != "" && campos[1][1].innerHTML != "" && campos[2][2].innerHTML != "" && arrayEntrar[6]){
        ganadorTresCampos(campos[0][0].querySelector('img').getAttribute('id'), campos[1][1].querySelector('img').getAttribute('id'), campos[2][2].querySelector('img').getAttribute('id'));
        arrayEntrar[6] = false;
    }

    if(campos[0][2].innerHTML != "" && campos[1][1].innerHTML != "" && campos[2][0].innerHTML != "" && arrayEntrar[7]){
        ganadorTresCampos(campos[0][2].querySelector('img').getAttribute('id'), campos[1][1].querySelector('img').getAttribute('id'), campos[2][0].querySelector('img').getAttribute('id'));
        arrayEntrar[7] = false;
    }
}

///Metemos la cuadricula de 3x3 en un array bidimensional

function ganadorEmpate(array){

    let arrayPos = [  [array[0] , array[1], array[2]],
     [array[3] , array[4], array[5]],
      [array[6] , array[7], array[8]]
    ];

    campoLleno(arrayPos);

    setTimeout(() => {
        let empate = 0;
    for (const casilla of array) {
        
        if (casilla.innerHTML != ""){

            if(empate == 8){
                user.winner = "Empate";
                sessionStorage.setItem("clave", JSON.stringify(user));
                window.location.assign("ganador.html");
            }
            empate++;
        }
    }
    }
    , 5000);
}

// Nos traemos un objetos con diversos datos

let user = JSON.parse(sessionStorage.getItem("clave"));

// Recogemos las 9 celdas del tres en raya en cajas

const cajas = document.getElementsByClassName("celda");

// Con este boolean cambiaremos de jugador

let cambiarJugador = true;

// Gestionamos los turnos de los dos jugadores

function cambiarTurno(player1, player2, caja) {
    if(cambiarJugador){
        if(caja.innerHTML == ""){
            caja.innerHTML = `<img src="${player1.imagen}" class="${player1.clase}" id="${player1.jugador}"/>`;
            cambiarJugador = false;
        }
    }else{
        if(caja.innerHTML == ""){
            caja.innerHTML = `<img src="${player2.imagen}" class="${player2.clase}" id="${player2.jugador}"/>`;
            cambiarJugador = true;
        }
    }
}

let cont = 0;

function cambiarTurnoConBot(player1, player2, caja, cajas){
    cambiarJugador = "false";
    console.log(cambiarJugador);

    if(caja.innerHTML == ""){
        caja.innerHTML = `<img src="${player1.imagen}" class="${player1.clase}" id="${player1.jugador}"/>`;
        ganadorEmpate(cajas);
        cambiarJugador = "true";
    }
    console.log(cambiarJugador);
    if(cont < 4 && cambiarJugador == "true"){
        console.log(cont);
        turnoBot(player2, cajas);
        cont++;
    }
}

const turnoBot = (player2, cajas) => {
    let posicion;
    let caja = "";
    do{
        posicion = randMinMax(0, 8);
        caja = cajas[posicion];
    }while(caja.innerHTML != "")

    caja.innerHTML = `<img src="${player2.imagen}" class="${player2.clase}" id="${player2.jugador}"/>`;
};

// Mediante esta funcion Gestionamos la Posicion del bot en el tablero y si hay un bot

function quienesJuegan(){
    let posicion;
    if(user.bot.boton == ""){
        // Mostramos a trabes del input los datos recogidos por el session

        document.getElementById("jug1").innerHTML = user.player1.jugador;
        document.getElementById("jug2").innerHTML = user.player2.jugador;
        posicion = 1;
    }else if(user.bot.boton == "Boton1"){
        document.getElementById("jug1").innerHTML = user.bot.name;
        document.getElementById("jug2").innerHTML = user.player2.jugador;
        document.getElementById("ficha1").innerHTML = `<div class="plataformaDedede"><img src="${user.bot.imagen}" class="metaJug" /></div>`;
        posicion = 2;
    }else if(user.bot.boton == "Boton2"){
        document.getElementById("jug1").innerHTML = user.player1.jugador;
        document.getElementById("jug2").innerHTML = user.bot.name;
        document.getElementById("ficha2").innerHTML = `<div class="plataformaDedede"><img src="${user.bot.imagen}" class="metaJug" /></div>`;
        posicion = 3;
    }
    return posicion;
}

// Añadimos dos booleanos, uno para que nos comprueba si esta jugando el bot solo una vez y el otro
// para que dependiendo si esta el bot o no, nos ejecute diferentes funciones de como insertar la ficha
let quienJuega = true;
let jugadorOBot = 1;

function empiezaJuego(){
    let player1;
    let player2;
    if(quienJuega){
        switch (quienesJuegan()) {
            case 1:
                player1 = user.player1;
                player2 = user.player2;
                break;
            case 2:
                player1 = user.bot;
                player2 = user.player2;
                jugadorOBot = 2;
                break;
            case 3:
                player1 = user.player1;
                player2 = user.bot;
                jugadorOBot = 3;
                break;
        }
        quienJuega = false;
    }
// Con el forof recorremos todas las cajas del 3 en raya
    for (const caja of cajas) {
        caja.addEventListener("click", () => {
            if(jugadorOBot == 1){
                console.log("Jugadores");
                cambiarTurno(player1, player2, caja);
            }else if(jugadorOBot == 2){
                console.log("Jugador y bot");
                cambiarTurnoConBot(player2, player1, caja, cajas);
            }else if(jugadorOBot == 3){
                console.log("Jugador y bot");
                cambiarTurnoConBot(player1, player2, caja, cajas);
            }
            ganadorEmpate(cajas);
        });
    }
}

empiezaJuego();