//TAREA 3: En otro archivo distinto,
// Por cada clase de r/argentina programa existente, vamos a pedir:
// horas, minutos y segundos de cada video. Ej. Si un video dura
// 2 horas, 38 minutos y 20 segundos, vamos a rellenar 3 campos de texto con
// cada dato.
// al apretar el botón "Calcular tiempo total", debe mostrar en un
// <strong> pre-creado el tiempo total de los videos.

function sumarArray(nodeList) {
  let sumaTotal = 0;

  for (let i = 0; i < nodeList.length; i++) {
    sumaTotal += Number(nodeList[i].value);
  }
  return sumaTotal;
}

function calcularTiempoTotalVideos(horas, minutos, segundos) {
  minutos += parseInt(segundos / 60);
  segundos %= 60;
  horas += parseInt(minutos / 60);
  minutos %= 60;

  let $tiempoTotalVideos = document.querySelector("#tiempo-total-videos");
  return ($tiempoTotalVideos.innerText = `${horas} horas, ${minutos} minutos, ${segundos} segundos`);
}

const $botonCalcularTiempo = document.querySelector("#calcular-tiempo-total");

$botonCalcularTiempo.onclick = function () {
  const $arrayHoras = document.querySelectorAll("#horas-videos");
  const $arrayMinutos = document.querySelectorAll("#minutos-videos");
  const $arraySegundos = document.querySelectorAll("#segundos-videos");

  let horasVideos = sumarArray($arrayHoras);
  let minutosVideos = sumarArray($arrayMinutos);
  let segundosVideos = sumarArray($arraySegundos);

  calcularTiempoTotalVideos(horasVideos, minutosVideos, segundosVideos);

  return false;
};
