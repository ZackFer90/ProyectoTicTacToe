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
    if(usuario.winner == usuario.jugador1.nombre){
        icono.innerHTML = `<img src="${usuario.jugador1.icono}" class="iconoGana ${usuario.jugador1.fondo}" />`;
        nombreJugador.innerHTML = usuario.jugador1.jugador;
        trofeo.innerHTML = `<img src="${usuario.jugador1.imagen}" class="${usuario.jugador1.ganadorClase}" />`;
        personaje.innerHTML = usuario.jugador1.nombre;
    }else if(usuario.winner == usuario.jugador2.nombre){
        icono.innerHTML = `<img src="${usuario.jugador2.icono}" class="iconoGana" />`;
        nombreJugador.innerHTML = usuario.jugador1.jugador;
        trofeo.innerHTML = `<img src="${usuario.jugador2.imagen}" class="${usuario.jugador2.ganadorClase}" />`;
        personaje.innerHTML = usuario.jugador2.nombre;
    }else if(usuario.winner == usuario.bot.jugador){
        icono.innerHTML = `<img src="${usuario.bot.icono}" class="iconoGana" />`;
        nombreJugador.innerHTML = "Pensabas que ganarias?";
        trofeo.innerHTML = `<img src="${usuario.bot.imagen}" class="${usuario.bot.ganadorClase}" />`;
        personaje.innerHTML = usuario.bot.nombre;
    }else{
        icono.innerHTML = `<img src="${usuario.empate.icono}" class="iconoGana" />`;
        nombreJugador.innerHTML = "";
        trofeo.innerHTML = `<img src="${usuario.empate.imagen}" class="${usuario.empate.ganadorClase}" />`;
        personaje.innerHTML = usuario.empate.nombre;
        nombreJugador.innerHTML = usuario.empate.texto;
        empatar.innerHTML = usuario.winner;
    }
}

cambiarPantalla();