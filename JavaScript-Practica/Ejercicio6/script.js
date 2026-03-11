let texto = document.getElementById('contador')
let boton1 = document.getElementById('sumar')
let boton2 = document.getElementById('restar')

let valor = 0;

boton1.addEventListener('click', sumar)
boton2.addEventListener('click', restar)

function sumar() {
    valor++
    texto.textContent = valor
}

function restar() {
    valor--
    texto.textContent = valor
}