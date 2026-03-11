let botones = document.querySelectorAll('.borrar')

botones.forEach(boton => {
    boton.addEventListener('click', borrar)
})

function borrar() {
    let li = this.parentElement
    li.remove()
}