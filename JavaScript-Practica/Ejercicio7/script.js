let campo = document.getElementById('nombre')
let boton = document.getElementById('b')

boton.addEventListener('click', comprobar)

function comprobar() {
    if (campo.value == "") {
        alert("Campo vacío")
    }
}