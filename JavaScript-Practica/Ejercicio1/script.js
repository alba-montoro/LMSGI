let texto = document.getElementById('texto')
let boton = document.getElementById('btn')

boton.addEventListener('click', cambiarTexto)

function cambiarTexto() {
    texto.textContent = "Texto cambiado con JavaScript"
}