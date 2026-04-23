/**
 * Gestió de llistat (Fruites) 

Crea un array amb 3 fruites. 

Afegeix una fruita nova al final de la llista programàticament. 

Mostra tota la llista per consola utilitzant un bucle forEach. 
 */
const frutas: string[] = ["Manzana", "Plátano", "Pera"];

// Añadimos al final
frutas.push("Naranja");

// Recorremos con una función de flecha (arrow function)
frutas.forEach((fruta) => {
    console.log(`Fruta: ${fruta}`);
});