const button = document.getElementById('boton');
let entrada = document.getElementById('num');
const numeroReal = Math.floor(Math.random() * 11);
const respuesta = document.getElementById("mensaje");
let intentos = 0;

button.addEventListener('click', comprobar);

function comprobar() {
    intentos++;
    if (entrada.value == numeroReal) {
        respuesta.textContent = "¡Has acertado! Llevas " + intentos + " intentos";
    } else if (numeroReal > entrada.value) {
        respuesta.textContent = "El número insertado es menor. Llevas " + intentos + " intentos";
    } else if (numeroReal < entrada.value) {
        respuesta.textContent = "El número insertado es mayor. Llevas " + intentos + " intentos";
    };
}
