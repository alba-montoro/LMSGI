let carrusel = document.getElementsByClassName("imagen");
let diapositivaActual = 0;

// Hay que llamar a la función
mostrarCarrusel();

function mostrarCarrusel () {

    for (i=0; i<carrusel.length; i++) {
        carrusel[i].style.display = "none";
    }

    carrusel[diapositivaActual].style.display = "block";
    diapositivaActual++;

    if (diapositivaActual >= carrusel.length) {
        diapositivaActual = 0;
    }

    setTimeout(mostrarCarrusel, 2000);
}