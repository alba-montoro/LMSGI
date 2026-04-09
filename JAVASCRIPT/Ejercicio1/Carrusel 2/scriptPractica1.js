let carrusel = document.getElementsByClassName('imagen')
let contador = 0

mostrar1() // inicializo

function mostrar1() {
    for (let i=0; i<carrusel.length; i++) {
        carrusel[i].style.display = "none"
    }

    carrusel[contador].style.display = "block"
    contador++;

    if (contador >= carrusel.length) {
        contador = 0
    }

    setTimeout(mostrar1, 2000)
}