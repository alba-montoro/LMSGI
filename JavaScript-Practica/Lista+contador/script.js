const lista = document.getElementById('lista')
const boton = document.getElementById('agregar')
let contador = 0

boton.addEventListener('click', añadir)

function añadir() {
    contador++
    const elemento = document.createElement('li')
    elemento.textContent = 'Elemento ' + contador + ' '

    /*const botonBorrar = document.createElement('button')
    botonBorrar.textContent = 'x'*/

    lista.appendChild(elemento)

    elemento.addEventListener('click', function borrar() {
        elemento.remove()
    })

    // elemento.appendChild(botonBorrar)
    // lista.appendChild(elemento)
}

/*function borrar() {
    this.parentElement.remove()
}*/