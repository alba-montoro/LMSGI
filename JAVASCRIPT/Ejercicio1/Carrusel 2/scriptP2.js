let imagenes = document.getElementsByClassName('imagen')
let b1 = document.getElementById('b1')
let b2 = document.getElementById('b2')
let b3 = document.getElementById('b3')

b1.addEventListener('click', mostrar1)
b2.addEventListener('click', mostrar2)
b3.addEventListener('click', mostrar3)

function mostrar1 () {
    for (let i=0; i<imagenes.length; i++) {
        imagenes[i].style.display = 'none'
    }

    imagenes[0].style.display = 'block'
}

function mostrar2 () {
    for (let i=0; i<imagenes.length; i++) {
        imagenes[i].style.display = 'none'
    }

    imagenes[1].style.display = 'block'
}

function mostrar3 () {
    for (let i=0; i<imagenes.length; i++) {
        imagenes[i].style.display = 'none'
    }

    imagenes[2].style.display = 'block'
}
