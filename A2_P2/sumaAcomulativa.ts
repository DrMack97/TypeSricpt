

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