/**
 * Gestió de dades reals (Mitjana amb Nulls) 

Tens el següent llistat de notes, on alguns 
alumnes no s'han presentat: [10, null, 15, 20, 25]. 

Crea un programa que calculi la mitjana de les notes, 
però ignorant completament els valors null (no han de sumar ni dividir).
 */

const notas: (number | null)[] = [10, null, 15, 20, 25];
let suma = 0;
let contador = 0;

for (const nota of notas) {
    if (nota !== null) { // Solo si la nota no es null
        suma += nota;
        contador++;
    }
}

const media = contador > 0 ? suma / contador : 0;
console.log(`La media (sin null) es: ${media}`);