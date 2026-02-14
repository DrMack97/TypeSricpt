//6.

console.log(`estamos calculando las dimensiones de un caja!`);

console.log(`puedes darme los Centimetros de la caja?`)

const boxLength = Number(prompt("Largo: "))
const boxWidth = Number(prompt("Ancho: "))
const boxHeight = Number(prompt("Altura: "))

let volumen = boxLength * boxWidth * boxHeight

let costo = volumen / 5000

console.log(`costo total: ` +Number(costo) + ` €`);