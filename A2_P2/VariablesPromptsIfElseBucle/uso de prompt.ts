//5. Calcular l'àrea d’un cercle que mostrarà per pantalla i ens demanarà el radi del cercle. 
// Recorda utilitzar una constante per al número PI.
let area: string
const pi = 3.141592653 
area = "AREA: "
console.log(`estamos calculando el area de un circulo!`);

let radio2 = prompt("puedes darme el area del circulo?")
console.log(area + pi * (Number(radio2)*Number(radio2)));