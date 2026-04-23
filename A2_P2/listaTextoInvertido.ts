/**
 * Invertir text 

Demana una paraula a l'usuari i mostra-la invertida 
(Exemple: "Hola" -> "aloH"). 
 */
const palabra = prompt("Escribe una palabra:") || "";
let invertida = "";

// Empezamos en la última posición (length - 1) hasta llegar a 0
for (let i = palabra.length - 1; i >= 0; i--) {
    invertida += palabra[i];
}

alert(`Original: ${palabra} -> Invertida: ${invertida}`);