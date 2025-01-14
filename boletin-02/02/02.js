/**
 * Diseñar un algoritmo para hallar el valor absoluto 
 * de un número leído de teclado y presentarlo en pantalla.
 */

// function calcularAbs () {
//     const numero = parseFloat(document.getElementById('numero').value);

//     document.getElementById('resultado').textContent = 'Por favor, ingresa un numero';

//     const abs = Math.abs(numero);
    
//     document.getElementById('resultado').textContent = `El Valor Absoluto es = ${abs.toFixed(2)}`;
// }

var num = window.prompt('Ingresa un número');

alert('El valor absoluto es = ' + Math.abs(num));