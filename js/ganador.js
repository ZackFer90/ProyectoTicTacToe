// Nos traemos un objetos con diversos datos

let usuario = JSON.parse(sessionStorage.getItem("clave"));

// Apuntamos a las etiquetas mediante las clases necesarias del html

let nombreJugador = document.getElementById("ganador");
let icono = document.getElementById("icono");
let trofeo = document.getElementById("trofeo");
let personaje = document.getElementById("personaje");
let empatar = document.getElementById("empatar");

console.log(usuario);

function cambiarPantalla(){
    if(usuario.winner == usuario.player1.name){
        icono.innerHTML = `<img src="${usuario.player1.icono}" class="iconoGana ${usuario.player1.fondo}" />`;
        nombreJugador.innerHTML = usuario.player1.jugador;
        trofeo.innerHTML = `<img src="${usuario.player1.imagen}" class="${usuario.player1.ganadorClase}" />`;
        personaje.innerHTML = usuario.player1.name;
    }else if(usuario.winner == usuario.player2.name){
        icono.innerHTML = `<img src="${usuario.player2.icono}" class="iconoGana" />`;
        nombreJugador.innerHTML = usuario.player1.jugador;
        trofeo.innerHTML = `<img src="${usuario.player2.imagen}" class="${usuario.player2.ganadorClase}" />`;
        personaje.innerHTML = usuario.player2.name;
    }else if(usuario.winner == usuario.bot.jugador){
        icono.innerHTML = `<img src="${usuario.bot.icono}" class="iconoGana" />`;
        nombreJugador.innerHTML = "Pensabas que ganarias?";
        trofeo.innerHTML = `<img src="${usuario.bot.imagen}" class="${usuario.bot.ganadorClase}" />`;
        personaje.innerHTML = usuario.bot.name;
    }else{
        icono.innerHTML = `<img src="${usuario.empate.icono}" class="iconoGana" />`;
        nombreJugador.innerHTML = "";
        trofeo.innerHTML = `<img src="${usuario.empate.imagen}" class="${usuario.empate.ganadorClase}" />`;
        personaje.innerHTML = usuario.empate.name;
        nombreJugador.innerHTML = usuario.empate.texto;
        empatar.innerHTML = usuario.winner;
    }
}

cambiarPantalla();