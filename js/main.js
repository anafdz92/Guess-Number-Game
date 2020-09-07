"use strict";

function getRandomNumber(max) {
  return Math.ceil(Math.random() * max);
}
const result = getRandomNumber(100);
console.log(result);

let boxNumber = document.querySelector(".js-box__text");
const button = document.querySelector(".js-login-button");
let message = document.querySelector(".js-message");
let counter = document.querySelector(".js-counter");

function check(ev) {
  ev.preventDefault();
  let inputValue = parseInt(boxNumber.value);

  if (inputValue > 100 || inputValue < 1) {
    message.innerHTML = "El número debe estar entre 1 y 100";
  } else {
    if (inputValue > result) {
      message.innerHTML = "Demasiado alto";
    } else if (inputValue < result) {
      message.innerHTML = "Demasiado bajo";
    } else if (inputValue === result) {
      message.innerHTML = "Has ganado Campeona!";
    }
  }

  counter.innerHTML = parseInt(counter.innerHTML) + 1;
  console.log(counter);
}

button.addEventListener("click", check);

//MEJORAS MIGUEL:

// 1. Define la lógica para hacer que el contador funcione.
// 2. Quita el feedback painter de los comentarios a una función ??
// 3. Arregla la estructura del if: verifica una opción, luego la otra y luego el resto es suficiente con una instrucción else.
// 4. Verifica si el número es menor que 1 o mayor que 100.
// 5. Si repetimos varias veces parseInt (value) dentro de una función, es mejor establecerlo en una constante.
// 6. Eliminar depurador y otro código innecesario

// 7. Mueve la lógica del contador a una función y ejecútala con cada click.
// 8. Mueve la lógica de retroalimentación a una función y ejecútala con cada click.
// 9. Estás escribiendo muchas veces "trackEl.innerHTML = 'something';", ¿qué hay de hacer una función que acepta una cadena como parámetro y la pinta en 'trackEl'?
// 10.Mueve ev.preventDefault () a la primera línea de la función.

// 11. Mueve las constantes y las variables a la parte de arriba del archivo.
// 12. Quita el código comentado.
// 13.Vincula el archivo JS externo correctamente (¡mira la ruta!).
// 14 Fija la posición de la etiqueta del script en el HTML (debe estar al final del cuerpo, pero dentro de él).
// 15. Defina una buena estructura de carpetas y archivos para el proyecto.
// 16. Elimine los archivos / carpetas no utilizados del proyecto: node_modules, package-lock.json.
//  17. La ruta CSS y JS debe comenzar con ./.

//  18.Añadir formulario
//  19.Agregue elementos HTML para el juego: título, etiqueta, entrada, botón, espacio para comentarios (div, p) y número de pruebas.
//  20.Use una etiqueta para definir el contenido de la entrada.
//  21.Conecte la etiqueta a la entrada utilizando el atributo for de la etiqueta y la identificación de la entrada.
//  22.Use el atributo de marcador de posición en lugar del valor uno para mostrar la pista de un campo.
//  23.Usar marcador de posición.

// //TIPS
// Guardar una referencia a elementos DOM en variables.
// Genere el número aleatorio y guárdelo en una variable.
// Iniciar contador de ensayos a 0.
// Defina una función que se ejecuta cuando el usuario hace clic en el botón, que
// incrementa el contador y pinta su valor en el HTML.
// recopile el valor de la entrada HTML y compárelo con el número aleatorio.
// si son iguales, dibuja un mensaje 'Tú ganas'.
// si es inferior, dibuje un mensaje 'Demasiado corto'.
// si es más alto, dibuje un mensaje 'Demasiado largo'.
// Asigne un oyente al botón de clic para ejecutar la función anterior.

// Then you can improve the game as you please, here you have some ideas:

// Add new feedback when the number is bigger than 100 or smaller than 0.
// Manage when the user hits the button and the input is empty.
// Make the input work when hitting enter key.
// Add a reset button that cleans the input, the counter, writes the initial feedback and generates a new random number to play again!
// Whatever you want!
