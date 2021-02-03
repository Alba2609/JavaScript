'use strict'
const elementos = 100;
const primos = [];
let iteraciones = 0;

for(let candidato = 2; candidato <= elementos; candidato++) { // Bucle for
    let primo = true;
    for(let divisor=2; divisor < candidato; divisor++) {
        iteraciones++;
        if(candidato%divisor === 0) {  //condicional
            primo = !primo;
            break;
        }
    }
    if(primo) primos.push(candidato); //condicional
}

document.write(`Iteraciones: ${iteraciones}`+' <br>'); // muestra en pantalla las iteracciones del bucle


document.write(`Numeros primos: ${primos}`); // muestra en pantalla los numeros primos


// aquí me entraría la tercera pagína del primer ejercicio y el ejercicio 6 que es mostrar los numeros primos del 1 al 100