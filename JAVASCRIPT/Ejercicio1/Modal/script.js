let botonABRIR = document.getElementById('abrir')
let botonCERRAR = document.getElementById('cerrar')

botonABRIR.addEventListener('click', abrir)
botonCERRAR.addEventListener('click', cerrar)

function abrir () {
    const modal = document.querySelector('#modal')
    modal.showModal()
}

function cerrar() {
    const modal = document.querySelector('#modal')
    modal.close()
}