//TAREA: En otro archivo html (no Index) y otro archivo js (no tarea-clase-5.js),
// creá un formulario que capture el primer nombre, segundo nombre, apellido/s y edad del usuario
// también vamos a crear un <h1> que diga Bienvenido!
// vas a crear un botón de acción que una vez que lo apretás, va a
// mostrar toda la información junta en un campo de texto
// Y va a cambiar el <h1> para decir "Bienvenido, nombreDeUsuario"!

const $ingresarDatosUsuario = document.querySelector('#ingresar-datos').onclick = function() {

    const $primerNombreUsuario = document.querySelector('#primer-nombre-usuario').value;
    const $segundoNombreUsuario = document.querySelector('#segundo-nombre-usuario').value;
    const $apellidoUsuario = document.querySelector('#apellido-usuario').value;
    const $edadUsuario = Number(document.querySelector('#edad-usuario').value);
 
    const $titulo = document.querySelector('#titulo');
    $titulo.innerText = `Bienvenido, ${$primerNombreUsuario}!`;
    
    const $datosUsuario = document.querySelector('#informacion-usuario');
    $datosUsuario.innerText = `Tu nombre es ${$primerNombreUsuario} ${$segundoNombreUsuario} ${$apellidoUsuario}, y tenes ${$edadUsuario} años!`;
 
    return false;

}

