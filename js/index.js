// Objeto donde guardar todos los datos

let objetoDelJuego = {
    jugador1: {
        jugador: "",
        nombre: "Kirby",
        imagen: "imagenes/kirby.png",
        clase: "kirby",
        icono: "imagenes/iconoKirby.png",
        fondo: "fondoTransparenteIcono",
        ganadorClase: "ganadorKirby",
    },
    jugador2: {
        jugador: "",
        nombre: "metaKnight",
        imagen: "imagenes/metaknight.png",
        clase: "metaKnight",
        icono: "imagenes/iconoMeta.png",
        ganadorClase: "ganadorMeta",
    },
    empate: {
        nombre: "Ganar?",
        imagen: "imagenes/imagenEmpate.png",
        ganadorClase: "ganadorKirby",
        icono: "imagenes/iconoEmpate.jpg",
        texto: "Aqui nadie gana",

    },
    bot: {
        jugador: "bot",
        nombre: "Rey Dedede",
        boton: "",
        imagen: "/imagenes/ReyDedede.png",
        clase: "metaKnight",
        icono: "/imagenes/iconoDedede.png",
        ganadorClase: "ganadorMeta",
    },
    winner: null,
 };

let palabra = "";
let cont = 0;

let enchegar = document.getElementById('musica');

function playAudio() {
    enchegar.play();
}

playAudio();

//Clicamos al boton de jugador kirby que se realicen acciones: guardar usuario y inahabilitar boton

const clicar1 = document.getElementById("botonJug1");
clicar1.addEventListener("click", () => {
    palabra = document.getElementById("jug1").value;
    if(palabra != ""){
        clicar1.disabled = true;
        clicar3.disabled = true;
        objetoDelJuego.jugador1.jugador=palabra;
        cont++;
        cambiarVentana();
    }
});

//Clicamos al boton de jugador Meta Knight que se realicen acciones: guardar usuario y inahabilitar boton

const clicar2 = document.getElementById("botonJug2");
clicar2.addEventListener("click", () => {
    palabra = document.getElementById("jug2").value;
    if(palabra != ""){
        clicar2.disabled = true;
        clicar4.disabled = true;
        objetoDelJuego.jugador2.jugador=palabra;
        cont++;
        cambiarVentana();
    } 
});

// Clicamos en Bot

const clicar3 = document.getElementById("botonBot1");
clicar3.addEventListener("click", () => {
    objetoDelJuego.bot.boton = "Boton1";
    clicar3.disabled = true;
    clicar4.disabled = true;
    clicar1.disabled = true;
    cont++;
    cambiarVentana();
    
});

const clicar4 = document.getElementById("botonBot2");
clicar4.addEventListener("click", () => {
    objetoDelJuego.bot.boton = "Boton2";
    clicar4.disabled = true;
    clicar3.disabled = true;
    clicar2.disabled = true;
    cont++;
    cambiarVentana();
    
});

//Cuando pulsemos dos botones nos llevamos el objeto y nos vamos a la otra pagina

function cambiarVentana(){
    console.log(objetoDelJuego.bot.boton);
    if(cont == 2){
        sessionStorage.setItem("clave", JSON.stringify(objetoDelJuego));
        window.location.assign("ticTacToe.html");
    }
}