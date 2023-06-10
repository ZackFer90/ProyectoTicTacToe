// Nos traemos un objetos con diversos datos

let user = JSON.parse(sessionStorage.getItem("clave"));

// Apuntamos a las etiquetas mediante las clases necesarias del html

let nombreJugador = document.getElementById("ganador");
let icono = document.getElementById("icono");
let trofeo = document.getElementById("trofeo");
let personaje = document.getElementById("personaje");
let empatar = document.getElementById("empatar");

console.log(user);

function cambiarPantalla(){
    if(user.winner == user.player1.jugador){
        icono.innerHTML = `<img src="${user.player1.icono}" class="iconoGana ${user.player1.fondo}" />`;
        nombreJugador.innerHTML = user.winner;
        trofeo.innerHTML = `<img src="${user.player1.imagen}" class="${user.player1.ganadorClase}" />`;
        personaje.innerHTML = user.player1.name;
    }else if(user.winner == user.player2.jugador){
        icono.innerHTML = `<img src="${user.player2.icono}" class="iconoGana" />`;
        nombreJugador.innerHTML = user.winner;
        trofeo.innerHTML = `<img src="${user.player1.imagen}" class="${user.player2.ganadorClase}" />`;
        personaje.innerHTML = user.player2.name;
    }else{
        icono.innerHTML = `<img src="${user.empate.icono}" class="iconoGana" />`;
        nombreJugador.innerHTML = "";
        trofeo.innerHTML = `<img src="${user.empate.imagen}" class="${user.empate.ganadorClase}" />`;
        personaje.innerHTML = user.empate.name;
        nombreJugador.innerHTML = user.empate.texto;
        empatar.innerHTML = user.winner;
    }
}

cambiarPantalla();