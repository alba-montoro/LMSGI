let input = document.getElementById('input')
let lista = document.getElementById('lista')
let boton = document.getElementById('boton')

boton.addEventListener('click', agregar)

function agregar() {
    let tarea = document.createElement('li')
    /*OTRA FORMA*/
    /* tarea.textContent = input.value*/
    // Asignar el valor del input a la variable li
    let node = document.createTextNode(input.value + ' ')

    tarea.appendChild(node)
    
    let button = document.createElement('button')
    // Le ponemos un texto al boton
    button.textContent = 'x'

    button.addEventListener('click', borrar)

    tarea.appendChild(button)

    button.addEventListener('click', function(){
        borrar(tarea)
    })

    lista.appendChild(tarea)
}

function borrar(tarea) {
    tarea.remove()
}