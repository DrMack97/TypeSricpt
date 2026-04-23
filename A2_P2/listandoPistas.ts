/**
 * Endevinar número d'una llista (Pistes) 
 */

const lista: number[] = [15, 33, 42, 7, 89];
let bucle = false;

while (!bucle) {
    const intento = parseInt(prompt("Adivina un número de la lista!: ")
    || "0 for exit");
    if (intento === 0){
        alert(`exit! `);
        bucle = false;
        break;
    }
    if (lista.includes(intento)) {
        alert("acertaste! ");
        bucle = true;
    } else {
        //usamos reduce() para facilitar las pistas
        const cercano = lista.reduce((prev, curr) => 
            Math.abs(curr - intento) < Math.abs(prev - intento) ? curr : prev
        );
        
        const pista = cercano > intento ? "mayor" : "más pequeño";
        alert(`No está. El número es ${pista}`);
    }
}