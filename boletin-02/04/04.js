/**
 * Escriba un algoritmo que lea un instante de tiempo 
 * dado en horas y minutos y escriba como respuesta los mensajes
 * “Buenos días” “Buenas tardes” “Buenas noches”, de acuerdo con
 * las siguientes reglas:
a. Es de día desde las 7:30 hasta las 14:00 horas.
b. Es tarde desde las 14:01 hasta las horas 20:30.
c. Es noche desde las 20:31 hasta las horas 7:29.
 */

var hora = window.prompt('Ingrese la hora: ');
var minutos = window.prompt('ingrese los minutos');

if (hora >= 7 && minutos >= 30 && hora <= 14 && minutos <= 0){
    alert ('Es de dia');
} else if (hora >= 14 && minutos >= 1 && hora <= 20 && minutos >= 30){
    alert ('Es de tarde');
} else {
    alert ('Es de noche');
}

