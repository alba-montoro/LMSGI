let lista = document.getElementById('lista')
let boton = document.getElementById('agregar')

boton.addEventListener('click', add)

function add() {
    let elemento = document.createElement('li')
    let nodoTexto = document.createTextNode("Nuevo elemento")
    
    elemento.appendChild(nodoTexto)
    lista.appendChild(elemento)
}


