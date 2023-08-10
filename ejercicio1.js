'use strict';
/*1. Dado dos números ingresados por el usuario realizar las 4 operaciones básicas, suma, resta, multiplicación, división e imprimir las operaciones. Validar la división entre 0(cero).*/
//ds: suma, resta, multiplicacion y division
//de: 2 numeros
//Santiago Garcia Velandia
let num1 = parseFloat(prompt("Ingrese el primer numero: "));
let num2 = parseFloat(prompt("Ingrese el segundo numero: "));


function suma(num1,num2) {
    return num1 + num2;
}
let sumar = suma(num1,num2);
alert("El resultado de la suma es: "+sumar);

function restar(num1,num2) {
    return num1 - num2;
    
}
let resta = restar(num1,num2);
alert("El resultado de la resta es: "+resta);

function multi(num1,num2) {
    return num1 * num2;
}
let multiplicacion = multi(num1,num2);
alert("El resulado de la multiplicacion es: "+multiplicacion);

function dividir(num1,num2) {
    if(num2>0){
        return num1 / num2;
    }
}
let division = dividir(num1,num2);
alert("El resultado de la division es: "+ division);

