// Declaro las variables
let button = document.getElementById('boton')
let button2 = document.getElementById('boton2')
let text = document.getElementById('texto')
let userText = document.getElementById('usuario')

// Les añado eventos a los botones
button.addEventListener('click', cambiarColor)
button2.addEventListener('click', cambiarTexto)


// Declaro y desarrollo las funciones
function cambiarColor() {
    text.style.color = "blue";
}

function cambiarTexto() {
    let contenidoNuevo = userText.value
    text.textContent = contenidoNuevo
}