/**
 * Trobar el valor màxim 
Donat un array de números (per exemple: [23, 56, 12, 90, 4]),
crea un algorisme que recorri la llista i trobi quin és el número més gran. 
 */

const numeros: number[] = [23, 56, 12, 90, 4];
let maximo: number = numeros[0]; 

for (let i = 1; i < numeros.length; i++) {
    if (numeros[i] > maximo) {
        maximo = numeros[i];
    }
}
console.log(`El número mayor es: ${maximo}`);