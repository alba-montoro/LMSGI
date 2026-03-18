let input = document.getElementById('input')
let lista = document.getElementById('lista')
let boton = document.getElementById('boton')

boton.addEventListener('click', agregar)

function agregar() {
    let tarea = document.createElement('li')
    tarea.textContent = input.value + ' '
    
    let button = document.createElement('button')
    // Le ponemos un texto al boton
    button.textContent = 'x'
    button.addEventListener('click', borrar)

    tarea.appendChild(button)
    lista.appendChild(tarea)
}

function borrar() {
    const li = this.parentElement
    li.remove()
}