let palabra = "";
let gameObject = {
    player1: {
        name: "Kirby",
    },
    player2: {
        name: "metaKnight",
    },
    winner: null,
 };

let cont = 0;

const clicar1 = document.getElementById("botonJug1");
clicar1.addEventListener("click", () => {
    palabra = document.getElementById("jug1").value;
    gameObject.player1.name=palabra;
    clicar1.disabled = true;
    cont++;
    cambiarVentana(palabra);
});

const clicar2 = document.getElementById("botonJug2");
clicar2.addEventListener("click", () => {
    palabra = document.getElementById("jug2").value;
    clicar2.disabled = true;
    cont++;
    cambiarVentana(palabra);
});

function cambiarVentana(jug){
    if(cont == 2){
        sessionStorage.setItem("clave", JSON.stringify(gameObject));
        window.location.assign("ticTacToe.html");
    // }else{
    //     palabra += jug + "+";
    }
}