let numero = document.getElementById('num')
let sum = document.getElementById('boton1')
let res = document.getElementById('boton2')
let rest = document.getElementById('boton3')

// Inicializar una variable inicial
let valor = 0

sum.addEventListener('click', sumar)
res.addEventListener('click', restar)
rest.addEventListener('click', reset)

function sumar() {
    valor++
    numero.textContent = valor
}

function restar() {
    valor--
    numero.textContent = valor
}

function reset() {
    valor = 0
    numero.textContent = valor
}