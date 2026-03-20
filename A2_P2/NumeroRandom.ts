/**
 * 4.adivina el numero
 */

const numRandom: number = Math.floor(Math.random()*100) +1;
let bucle: boolean = true;

console.log("--- ¡Adivina el Número Secreto (1-100)! ---")

while (bucle){
    const input = prompt("Introduce un numero (o pulsa 0 para salir) 0");
    //validacion =>
    if (input === null || input === "0"){
        alert(`respuesta: ${numRandom}`);
        bucle = false;
        break;
    }

    const intento = parseInt(input);
    
    // si no es un numero o si es menor que 1 o si es mayor que 100 
    if (isNaN(intento) || intento < 1 || intento > 100){
        alert("indtroduce un numero del 1 al 100");
    }else if(intento < numRandom){
        alert("el num es mayor ");
    }else if(intento > numRandom){
        alert("el numero es menor")
    }else{
        alert("GANASTE!!")
        bucle = false;
    }
}