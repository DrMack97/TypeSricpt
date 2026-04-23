/**
 * 12. Manipulació bàsica d'objectes 
 */

type Salarios = { [key: string]: number };

const salarios: Salarios = {
    John: 100,
    Ann: 160,
    Pete: 130
};

let result: number = 0;

// Obtenemos un array: [100, 160, 130]
const valores = Object.values(salarios);

for (const salario of valores) {
    result += salario;
}

console.log(`Total salarios: ${result}`);