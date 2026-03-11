let box = document.getElementById('caja')
let boton = document.getElementById('color')

boton.addEventListener('click', cambiarColor)

function cambiarColor() {
    box.style.color = "white"
    box.style.backgroundColor = "blue"
}