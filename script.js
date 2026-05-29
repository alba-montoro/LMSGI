const botonCargar = document.getElementById('btn-cargar');  
const contenedor = document.getElementById('contenedor-personajes');

// Creamos el evento para que recoga el click del botón
botonCargar.addEventListener('click', obtenerDatos);

async function obtenerDatos() {
    try {
        /*Realizamos la petición a la API, yo he usado la de Rick and Morty
        porque es gratuita y no requiere autenticación*/
        const respuesta = await fetch('https://rickandmortyapi.com/api/character');

        // Convertimos la respuesta a JSON
        const datos = await respuesta.json();

        // La API guarda los personajes en una propiedad llamada "results"
        pintarEnHTML(datos.results);

    } catch (error) {
    console.error('Error al obtener los datos:', error);
    contenedor.innerHTML = "<p>Error al cargar los datos. <p>";
    }

}

// Función para pintar los personajes en el HTML
function pintarEnHTML(personajes) {
    contenedor.innerJTML = ''; // Primero limpiamos
    personajes.forEach(personaje => {
        // Creamos un div para cada personaje
        const tarjeta = document.createElement('div');
        tarjeta.className = 'tarjeta';

        // Metemos contenido a la tarjeta
        tarjeta.innerHTML = `
            <img src="${personaje.image}" alt='${personaje.name}'>
            <h3>${personaje.name}</h3>
            <p>Estado: ${personaje.status}</p>
        `;

        // Lo añadimos al contenedor principal
        contenedor.appendChild(tarjeta);
    });
}

