const contenedor = document.getElementById('principal')
const boton = document.getElementById('registro')
const nom = document.getElementById('nombre')
const ap = document.getElementById('apellido')
const foto = document.getElementById('foto')


boton.addEventListener('click', registrar)

function registrar() {
    let tarjeta = document.createElement('div')
    let nombre = document.createElement('p')
    nombre.textContent = nom.value
    let apellido = document.createElement('p')
    apellido.textContent = ap.value
    let imagen = document.createElement('img')
    // si a una imagen no le añades el src no sale
    imagen.setAttribute('src', foto.value)

    tarjeta.append(nombre, apellido, imagen)
    contenedor.appendChild(tarjeta)
}