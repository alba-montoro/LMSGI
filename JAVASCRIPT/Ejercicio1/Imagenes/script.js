// getElementsByClassName es como declarar un array
let imagen = document.getElementsByClassName("imagen");

let button1 = document.getElementById("b1");
let button2 = document.getElementById("b2");
let button3 = document.getElementById("b3");

button1.addEventListener("click", mostrar1);
button2.addEventListener("click", mostrar2);
button3.addEventListener("click", mostrar3)

function mostrar1 () {
    for (i = 0; i<imagen.length; i++) {
    imagen[i].style.display = "none";
    }
    imagen[0].style.display = "block";
}

function mostrar2 () {
    for (i = 0; i<imagen.length; i++) {
    imagen[i].style.display = "none";
    }
    imagen[1].style.display = "block";

}

function mostrar3 () {
    for (i = 0; i<imagen.length; i++) {
    imagen[i].style.display = "none";
    }
    imagen[2].style.display = "block";

}


