
//TAREA: crear un formulario donde un usuario pueda ingresar su salario anual.
//cuando el usuario haga click en el botón "calcular", mostrar el salario mensual
// en una caja de texto deshabilitada. --> <input type="text" disabled id="salario-mensual"/>

document.querySelector('#calcular-salario-mensual').onclick = function() {
    const $salarioAnual = Number(document.querySelector('#salario-anual').value);
    
    Number(document.querySelector('#salario-mensual').value = $salarioAnual/12);
    
    return false;
}
