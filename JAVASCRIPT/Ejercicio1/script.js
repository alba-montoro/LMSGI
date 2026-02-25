// Declaramos variables
const button = document.getElementById('agregar');
const listatareas = document.getElementById('listatareas');
const entrada = document.getElementById('entrada');
const bcambiarcolor = document.getElementById('cambiarcolor');
//const imagen = document.getElementById('imagen');
//const button2 = document.getElementById('borrar');

// Le añadimos una accion a la variable del boton
button.addEventListener('click', agregar);
bcambiarcolor.addEventListener('click', colornaranja)
/*button2.addEventListener('click', borrar);*/

function colornaranja () {
    const listatareasli = document.getElementsByTagName("li");
    for (let i=0; i<listatareasli.length; i++) {
        listatareasli[i].style.color="orange";
    }
}

// Declaramos la funcion
function agregar() {
    // Primero creamos el elemento que vamos a meter y le asignamos una variable
    const litarea = document.createElement("li");
    // Creamos un nodo que recoja el valor que se inserte en "entrada" que es un input en el html
    const node = document.createTextNode(entrada.value);

    // Se asignan los padres para que las constantes que hemos creado ahora sepan dónde van
    // ptarea es el padre de node
    litarea.appendChild(node);

    // tareas es el padre de ptarea
    listatareas.appendChild(litarea);

    // Insertar un enlace
    /*const enlace = document.createElement("a");
    const node2 = document.createTextNode("Enlace a...");

    enlace.appendChild(node2);

    enlace.setAttribute("href", "https://www.ieszaidinvergeles.org");

    ptarea.appendChild(enlace);*/

    // Insertar imagen
    /*const img = document.createElement("img");

    img.setAttribute("src", "https://www.shutterstock.com/image-photo/beautiful-golden-retriever-cute-puppy-600nw-2526542701.jpg");

    imagen.appendChild(img);*/
}

/*function borrar () {
    ptarea.remove();
}*/