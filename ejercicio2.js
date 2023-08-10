'use strict';
/**
 * Calcular el sueldo a pagar de un trabajador dado que se debe ingresar la cantidad de horas trabajadas y el valor de la hora en pesos.
 * ds: sueldo
 * de: horas pesos, cant hora
 * Santiago Garcia Velandia
 */

let cantidadHoras = parseFloat(prompt("Ingrese la cantidad de horas trabajadas: "));
let valorHora = parseFloat(prompt("Ingrese el valor de hora en pesos: "));
function total(cantidadHoras,num2) {
    return cantidadHoras * valorHora;
}

let resultado = total(cantidadHoras,valorHora);
alert("Su sueldo es de: "+ resultado);