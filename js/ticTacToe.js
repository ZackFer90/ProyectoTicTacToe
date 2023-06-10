/// Gestionamos el bot

function jugadorBot(){

}

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
        console.log("Campo Horiz 1 lleno");
        ganadorTresCampos(campos[0][0].querySelector('img').getAttribute('id'), campos[0][1].querySelector('img').getAttribute('id'), campos[0][2].querySelector('img').getAttribute('id'));
        arrayEntrar[0] = false;
    }

    if(campos[1][0].innerHTML != "" && campos[1][1].innerHTML != "" && campos[1][2].innerHTML != "" && arrayEntrar[1]){
        console.log("Campo Horiz 2 lleno");
        ganadorTresCampos(campos[1][0].querySelector('img').getAttribute('id'), campos[1][1].querySelector('img').getAttribute('id'), campos[1][2].querySelector('img').getAttribute('id'));
        arrayEntrar[1] = false;
    }

    if(campos[2][0].innerHTML != "" && campos[2][1].innerHTML != "" && campos[2][2].innerHTML != "" && arrayEntrar[2]){
        console.log("Campo Horiz 3 lleno");
        ganadorTresCampos(campos[2][0].querySelector('img').getAttribute('id'), campos[2][1].querySelector('img').getAttribute('id'), campos[2][2].querySelector('img').getAttribute('id'));
        arrayEntrar[2] = false;
    }

///Verticales
    if(campos[0][0].innerHTML != "" && campos[1][0].innerHTML != "" && campos[2][0].innerHTML != "" && arrayEntrar[3]){
        console.log("Campo Vert 1 lleno");
        ganadorTresCampos(campos[0][0].querySelector('img').getAttribute('id'), campos[1][0].querySelector('img').getAttribute('id'), campos[2][0].querySelector('img').getAttribute('id'));
        arrayEntrar[3] = false;
    }

    if(campos[0][1].innerHTML != "" && campos[1][1].innerHTML != "" && campos[2][1].innerHTML != "" && arrayEntrar[4]){
        console.log("Campo Vert 2 lleno");
        ganadorTresCampos(campos[0][1].querySelector('img').getAttribute('id'), campos[1][1].querySelector('img').getAttribute('id'), campos[2][1].querySelector('img').getAttribute('id'));
        arrayEntrar[4] = false;
    }

    if(campos[0][2].innerHTML != "" && campos[1][2].innerHTML != "" && campos[2][2].innerHTML != "" && arrayEntrar[5]){
        console.log("Campo Vert 3 lleno");
        ganadorTresCampos(campos[1][2].querySelector('img').getAttribute('id'), campos[1][2].querySelector('img').getAttribute('id'), campos[2][2].querySelector('img').getAttribute('id'));
        arrayEntrar[5] = false;
    }

///Diagonal
    if(campos[0][0].innerHTML != "" && campos[1][1].innerHTML != "" && campos[2][2].innerHTML != "" && arrayEntrar[6]){
        console.log("Campo Diago 1 lleno");
        ganadorTresCampos(campos[0][0].querySelector('img').getAttribute('id'), campos[1][1].querySelector('img').getAttribute('id'), campos[2][2].querySelector('img').getAttribute('id'));
        arrayEntrar[6] = false;
    }

    if(campos[0][2].innerHTML != "" && campos[1][1].innerHTML != "" && campos[2][0].innerHTML != "" && arrayEntrar[7]){
        console.log("Campo Diago 2 lleno");
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

// Nos traemos un objetos con diversos datos

let user = JSON.parse(sessionStorage.getItem("clave"));

// Recogemos las 9 celdas del tres en raya en cajas

const cajas = document.getElementsByClassName("celda");

// Con este boolean cambiaremos de jugador

let cambiarJugador = true;

// Gestionamos los turnos

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
        posicion = 2;
    }else if(user.bot.boton == "Boton2"){
        document.getElementById("jug1").innerHTML = user.player1.jugador;
        document.getElementById("jug2").innerHTML = user.bot.name;
        posicion = 3;
    }else{
        console.log("Algo falla");
    }
    return posicion;
}

// Con el forof comprobamos a que caja le clica y añadimos una reaccion que nos cambiara de jugador y nos insertara una imagen segun el jugador
let quienJuega = true;

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
                break;
            case 3:
                player1 = user.player1;
                player2 = user.bot;
                break;
        }
        quienJuega = false;
    }

    for (const caja of cajas) {
        caja.addEventListener("click", () => {
            // console.log(user);
            // if(user.bot.boton == ""){
            //     cambiarTurno(user.player1, user.player2, caja);
            // }else if(user.bot.boton == "Boton1"){
            //     cambiarTurno(user.player1, user.player2, caja);
            // console.log("Ya esta aquiiiii");
            // }else if(user.bot.boton == "Boton2"){
            //     cambiarTurno(user.player1, user.player2, caja);
            //     console.log("Ya esta aquiiiii");
            // }else{
            //     console.log("Algo falla");
            // }
            cambiarTurno(player1, player2, caja);
            ganadorEmpate(cajas);
        });
    }
}

empiezaJuego();