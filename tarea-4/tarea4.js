//TAREA 4: En otro archivo distinto,
// Crear una lista de <ol> y <li> que contengan sólo números.
// Convertir esos números a un array y:
// 1. calcular el promedio y mostrarlo en un <em> pre-creado con el texto "El promedio es..."
// 2. obtener el número más pequeño y mostrarlo en un <em> pre-creado con el texto "El número más pequeño es..."
// 3. obtener el número más grande y mostrarlo en un <em> pre-creado con el texto "El número más grande es..."
// 4. obtener el número que más se repite y mostrarlo en un <em> pre-creado con el texto "El número más frecuente es..."

function calcularPromedioNumeros(array) {
  let sumaTotal = 0;
  for (let i = 1; i < array.length; i++) {
    sumaTotal += array[i];
  }

  return sumaTotal / array.length;
}

function calcularNumeroMasPequenio(array) {
  let numeroMasPequenio = array[0];

  for (let i = 0; i < array.length; i++) {
    if (array[i] < numeroMasPequenio) {
      numeroMasPequenio = array[i];
    }
  }
  return numeroMasPequenio;
}

function calcularNumeroMasGrande(array) {
  let numeroMasGrande = array[0];

  for (let i = 1; i < array.length; i++) {
    if (array[i] > numeroMasGrande) {
      numeroMasGrande = array[i];
    }
  }
  return numeroMasGrande;
}

function calcularNumeroMasFrecuente(array) {
  let numeroMasFrecuente;
  let frecuenciaMasAlta = 0;

  for (let i = 0; i < array.length; i++) {
    let contador = 0;

    for (let j = 0; j < array.length; j++) {
      if (array[j] === array[i]) {
        contador++;
      }
    }
    
    if (contador > frecuenciaMasAlta) {
        numeroMasFrecuente = array[i];
        frecuenciaMasAlta = contador;
      }
    }
  return numeroMasFrecuente;
}



const $arrayDeNumeros = document.querySelectorAll("li");
let arrayDeNumeros = [];

for (let i = 0; i < $arrayDeNumeros.length; i++) {
  arrayDeNumeros.push(Number($arrayDeNumeros[i].innerText));
}

const $promedioDeNumeros = document.querySelector("#promedio-de-numeros");
$promedioDeNumeros.innerText += calcularPromedioNumeros(arrayDeNumeros);

const $numeroMasPequenio = document.querySelector("#numero-mas-pequenio");
$numeroMasPequenio.innerText += calcularNumeroMasPequenio(arrayDeNumeros);

const $numeroMasGrande = document.querySelector("#numero-mas-grande");
$numeroMasGrande.innerText += calcularNumeroMasGrande(arrayDeNumeros);

const $numeroMasFrecuente = document.querySelector("#numero-mas-frecuente");
$numeroMasFrecuente.innerText += calcularNumeroMasFrecuente(arrayDeNumeros);