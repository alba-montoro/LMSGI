const texto = document.getElementById('texto')
const bSuma = document.getElementById('suma')
const bResta = document.getElementById('resta')
const bReset = document.getElementById('reset')

let contador = localStorage.getItem('contador')
texto.textContent = contador

bSuma.addEventListener('click', sumar)
bResta.addEventListener('click', restar)
bReset.addEventListener('click', resetear)

function sumar() {
    contador++
    localStorage.setItem('contador', contador)
    texto.textContent = contador
}

function restar() {
    contador--
    localStorage.setItem('contador', contador)
    texto.textContent = contador
}

function resetear() {
    contador = 0
    texto.textContent = contador
}