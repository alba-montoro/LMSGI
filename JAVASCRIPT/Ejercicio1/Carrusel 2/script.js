const carrusel = document.getElementsByClassName("imagen");
const boton1 = document.getElementById("btn1");
const boton2 = document.getElementById("btn2");
const boton3 = document.getElementById("btn3");

boton1.addEventListener('click', function(){fboton(0)});
boton2.addEventListener('click', function(){fboton(1)});
boton3.addEventListener('click', function(){fboton(2)});

// index es un parámetro porque está en una funcion y no hace falta declararla
function fboton(index){
    for (i=0; i<carrusel.length; i++) {
        carrusel[i].style.display = "none";
    }
    carrusel[index].style.display = "block";
}

