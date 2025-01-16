/*Una nueva sala de conciertos local necesita crear una aplicación para gestionar las bandas que solicitan actuar en ella. 
    Para ello usando las estructuras de datos más adecuadas, deberás implementar un programa que gestione la siguiente información:

Bandas:
Nombre
Año de formación
Integrantes: contiene el dni, nombre y apellido de cada uno de los integrantes. No podrá haber, evidentemente, dos componentes con el mismo dni. 
Elige la estructura más adecuada.

Teléfono de contacto 
Estilo
MostrarBanda
MostrarIntegrantes

Con estas bandas se quiere mantener un listado con el que se permita:

imprimirListadoBandas
buscarBandaPorNombre: busca una banda en la lista por su nombre. (Debes utilizar programación funcional)
ordenarBandasPorAño: ordena la lista por año de formación*/ 

const banda1 = new Banda("BlackRose", 2015, "123456789", "Rock");


const integrante1 = new Integrante("12345678", "Juan", "Caballero");
const integrante2 = new Integrante("87654321", "Ana", "Diaz");


banda1.agregarIntegrante(integrante1);
banda1.agregarIntegrante(integrante2);


banda1.listadoBandas();