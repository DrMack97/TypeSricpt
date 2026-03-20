/**
 * Suma acumulativa 

Crea un programa que demani números a l'usuari constantment i els vagi sumant. 
El programa s'aturarà quan l'usuari introdueixi un 0. Llavors mostrarà la suma total. 
 */

console.log('CONTADOR acomulativo: ')

let contadorAcomulativo: number = 0;
let numeros: number = -1;

while(numeros != 0) {

    numeros = Number(prompt(' que numeros quieres sumar  (0 = exit) '))
    
    contadorAcomulativo += numeros

    console.log('sumatoria: ' 
        + contadorAcomulativo + ' numero elegido ' + numeros)
}
/*
en este ejercicio has creado la misma varaible dentro del bucle 
*/