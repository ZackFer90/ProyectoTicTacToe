// Objeto donde guardar todos los datos

let gameObject = {
    player1: {
        name: "Kirby",
        imagen: "imagenes/kirby.png",
        clase: "kirby",
    },
    player2: {
        name: "metaKnight",
        imagen: "imagenes/metaknight.png",
        clase: "metaKnight",
    },
    winner: null,
 };

let palabra = "";
let cont = 0;

//Clicamos al boton de jugador kirby que se realicen acciones: guardar usuario y inahabilitar boton

const clicar1 = document.getElementById("botonJug1");
clicar1.addEventListener("click", () => {
    palabra = document.getElementById("jug1").value;
    if(palabra != ""){
        clicar1.disabled = true;
        gameObject.player1.name=palabra;
        cont++;
        cambiarVentana(palabra);
    }
});

//Clicamos al boton de jugador Meta Knight que se realicen acciones: guardar usuario y inahabilitar boton

const clicar2 = document.getElementById("botonJug2");
clicar2.addEventListener("click", () => {
    palabra = document.getElementById("jug2").value;
    if(palabra != ""){
        clicar2.disabled = true;
        gameObject.player2.name=palabra;
        cont++;
        cambiarVentana(palabra);
    }
    
});

//Cuando pulsemos dos botones nos llevamos el objeto y nos vamos a la otra pagina

function cambiarVentana(jug){
    if(cont == 2){
        sessionStorage.setItem("clave", JSON.stringify(gameObject));
        window.location.assign("ticTacToe.html");
    }
}