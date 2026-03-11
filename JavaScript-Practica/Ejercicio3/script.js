let mensaje = document.getElementById('mensaje')
let boton = document.getElementById('toggle')

boton.addEventListener('click', visibilidad)

function visibilidad() {
    // Con los tres iguales he hecho un toogle casero
    if (mensaje.style.display === 'block') {
        mensaje.style.display = 'none'
    } else {
        mensaje.style.display = 'block'
    }
}