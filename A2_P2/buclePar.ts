/**
1.Comptador amb While
Crea un bucle que mostri per consola els números parells del 2 al 10.
*/

console.log('CONTADOR PAR: ')
let contador: number = 0;
while(contador < 10) {
    contador += 1

    if(contador %2 == 0){
        console.log(contador)
    }
}


