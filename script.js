// let, var , const (variable que no se puede modificar)
// se pone parseInt para que no lo interprete como una cadena de caracteres, sino como un número

       /* let edad = parseInt(prompt("Introduce la edad"));
        if (edad >= 18) {
            console.log("Eres mayor de edad porque tienes", edad, "años")
        } else {
            console.log("Eres menor de edad porque tienes", edad, "años")
        }*/
       
        // Así se declaran funciones
        /*function mostrarNombre() {
            // Crear variables
            const entrada = document.getElementById("nombre");
            const salida = document.getElementById("respuesta");
            salida.textContent = entrada.value;
        }*/

        /*function imc() {
            const peso=document.getElementById("peso");
            const altura=document.getElementById("altura");
            const respuesta = document.getElementById("respuesta");
            let pesoPersona = peso.value;
            let alturaPersona = altura.value;
            let calcularIMC = pesoPersona/(alturaPersona*alturaPersona);
            respuesta.textContent=calcularIMC

            if (calcularIMC < 18.5) {
                solucion.textContent="Tienes bajo peso";
            } else if (calcularIMC >= 18.5 && calcularIMC < 24.9) {
                solucion.textContent="Tienes peso normal";
            } else if (calcularIMC >= 25 && calcularIMC < 29.9) {
                solucion.textContent="Tienes sobrepeso";
            } else {
                solucion.textContent="Tienes obesidad";
            }
            
        }*/

        /*function cambiarColor() {
            const cuadrado = document.getElementById("cuadrado");
            cuadrado.style.backgroundColor = "blue";
            cuadrado.style.width = "300px";
            cuadrado.style.height = "300px";
            document.body.style.backgroundColor = "yellow";

            // Para ocultar un elemento, se usa display none
            cuadrado.style.display= "none";
        }*/

        // Captura de eventos
        const boton = document.getElementById('boton');
        boton.addEventListener('click', modoNoche);

        function modoNoche() {
            document.body.style.backgroundColor = "black";
            document.body.style.color = "white";
        }
    
