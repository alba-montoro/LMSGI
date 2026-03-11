let campo = document.getElementById('nombre')
let boton = document.getElementById('b')

boton.addEventListener('click', comprobar)

function comprobar() {
    if (campo == "") {
        alert("Campo vacío")
    }
}