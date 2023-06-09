// Con este boolean cambiaremos de jugador

let cambiarJugador = true;

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
        }
}


///Comprobamos si los campos en linia estan vacios o no, en caso de estar llenos no reenvia a otra funcion

function campoLleno(campos){
///Horizontales
    if(campos[0][0].innerHTML != "" && campos[0][1].innerHTML != "" && campos[0][2].innerHTML != ""){
        console.log("Campo Horiz 1 lleno");
        ganadorTresCampos(campos[0][0].querySelector('img').getAttribute('id'), campos[0][1].querySelector('img').getAttribute('id'), campos[0][2].querySelector('img').getAttribute('id'));
    }

    if(campos[1][0].innerHTML != "" && campos[1][1].innerHTML != "" && campos[1][2].innerHTML != ""){
        console.log("Campo Horiz 2 lleno");
        ganadorTresCampos(campos[1][0].querySelector('img').getAttribute('id'), campos[1][1].querySelector('img').getAttribute('id'), campos[1][2].querySelector('img').getAttribute('id'));
    }

    if(campos[2][0].innerHTML != "" && campos[2][1].innerHTML != "" && campos[2][2].innerHTML != ""){
        console.log("Campo Horiz 3 lleno");
        ganadorTresCampos(campos[2][0].querySelector('img').getAttribute('id'), campos[2][1].querySelector('img').getAttribute('id'), campos[2][2].querySelector('img').getAttribute('id'));
    }

///Verticales
    if(campos[0][0].innerHTML != "" && campos[1][0].innerHTML != "" && campos[2][0].innerHTML != ""){
        console.log("Campo Vert 1 lleno");
        ganadorTresCampos(campos[0][0].querySelector('img').getAttribute('id'), campos[1][0].querySelector('img').getAttribute('id'), campos[2][0].querySelector('img').getAttribute('id'));
    }

    if(campos[0][1].innerHTML != "" && campos[1][1].innerHTML != "" && campos[2][1].innerHTML != ""){
        console.log("Campo Vert 2 lleno");
        ganadorTresCampos(campos[0][1].querySelector('img').getAttribute('id'), campos[1][1].querySelector('img').getAttribute('id'), campos[2][1].querySelector('img').getAttribute('id'));
    }

    if(campos[0][2].innerHTML != "" && campos[1][2].innerHTML != "" && campos[2][2].innerHTML != ""){
        console.log("Campo Vert 3 lleno");
        ganadorTresCampos(campos[1][2].querySelector('img').getAttribute('id'), campos[1][2].querySelector('img').getAttribute('id'), campos[2][2].querySelector('img').getAttribute('id'));
    }

///Diagonal
    if(campos[0][0].innerHTML != "" && campos[1][1].innerHTML != "" && campos[2][2].innerHTML != ""){
        console.log("Campo Diago 1 lleno");
        ganadorTresCampos(campos[0][0].querySelector('img').getAttribute('id'), campos[1][1].querySelector('img').getAttribute('id'), campos[2][2].querySelector('img').getAttribute('id'));
    }

    if(campos[0][2].innerHTML != "" && campos[1][1].innerHTML != "" && campos[2][0].innerHTML != ""){
        console.log("Campo Diago 2 lleno");
        ganadorTresCampos(campos[0][2].querySelector('img').getAttribute('id'), campos[1][1].querySelector('img').getAttribute('id'), campos[2][0].querySelector('img').getAttribute('id'));
    }
}

///Metemos la cuadricula de 3x3 en un array bidimensional

function ganadorEmpate(array){

    let empate = 0;
    for (const casilla of array) {
        
        if (casilla.innerHTML != ""){

            if(empate == 8){
                console.log("Empate");
            }
            empate++;
        }
    }

    let arrayPos = [  [array[0] , array[1], array[2]],
     [array[3] , array[4], array[5]],
      [array[6] , array[7], array[8]]
    ];

    campoLleno(arrayPos);


    // for (let i = 0; i < 3; i++) {
    //     for (let j = 0; j < 3; j++) {
    //         const element = arrayPos[i][j];
    //         // element.querySelector('img').getAttribute('id')
            
    //         if(element.innerHTML != ""){
    //             const prueba = element.querySelector('img').getAttribute('id');
    //             console.log(`Bidimensional y ${i} x ${j}` + prueba);
    //         }
    //     }
    //     const element = arrayPos[i];
        
    // }



    // console.log("Prueba posiciones: " + arrayPos[2][2].innerHTML);

    

    // let horizontal1 = 0;
    // let horizontal2 = 0;
    // let horizontal3 = 0;
    // let horizArray1 = [];
    // let horizArray2 = [];
    // let horizArray3 = [];

    
    // for (let i = 0; i <= array.length-1; i++) {
    //     // console.log("prueba "+ horizArray[i]);
    //     if(array[i].innerHTML != "" && i < 3){
    //         horizontal1++;
    //         horizArray1.push(array[i].querySelector('img').getAttribute('id'));

    //         if(horizontal1 == 3){
    //             ganador(horizArray1);
    //             console.log("Gane hor1");
    //         }
    //     }

    //     if(array[i].innerHTML != "" && i > 2 && i <= 5){
    //         horizontal2++;
    //         horizArray2.push(array[i].querySelector('img').getAttribute('id'));

    //         if(horizontal2 == 3){
    //             ganador(horizArray2);
    //             console.log("Gane hor2");
    //         }
    //     }

    //     if(array[i].innerHTML != "" && i > 5 && i <= 8){
    //         horizontal3++;
    //         horizArray3.push(array[i].querySelector('img').getAttribute('id'));

    //         if(horizontal3 == 3){
    //             ganador(horizArray3);
    //             console.log("Gane hor3");
    //         }
    //     }
    // }
}

// Nos traemos un objetos con diversos datos

let user = JSON.parse(sessionStorage.getItem("clave"));

// Mostramos a trabes del input los datos recogidos por el session

document.getElementById("jug1").innerHTML = user.player1.name;
document.getElementById("jug2").innerHTML = user.player2.name;

// Recogemos las 9 celdas del tres en raya en cajas

const cajas = document.getElementsByClassName("celda");

// Con el forof comprobamos a que caja le clica y añadimos una reaccion que nos cambiara de jugador y nos insertara una imagen segun el jugador

for (const caja of cajas) {
    caja.addEventListener("click", () => {
        if(cambiarJugador){
            if(caja.innerHTML == ""){
                caja.innerHTML = `<img src="${user.player1.imagen}" class="${user.player1.clase}" id="${user.player1.name}"/>`;
                cambiarJugador = false;
            }
        }else{
            if(caja.innerHTML == ""){
                caja.innerHTML = `<img src="${user.player2.imagen}" class="${user.player2.clase}" id="${user.player2.name}"/>`;
                cambiarJugador = true;
            }
        }
        ganadorEmpate(cajas);
    });
}