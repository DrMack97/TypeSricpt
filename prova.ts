//1.-
let DNI: string
let num: string

DNI = "DNI"
num = " 26673339"
console.log(DNI + num)

//2.- Doneu un exemple d’una variable constante i la resta de variables  
// per a calcular l'àrea d’un cercle que mostrarà per pantalla

let area: string
let pi = 3.141592653 
let radio = 2 
area = "AREA: "
console.log(area + pi * (radio*radio)); // 3

//3.	Escriu un codi que pregunti el nom a l'usuari i el saludi per pantalla. (solució en apunts)

let user = prompt("HELLO USER, WHATS UR NAME?");
console.log(`Hello ${user}, nice to meet you!`);

//4 4.	A continuació tens un codi que demana a l'usuari dos nombres i mostra la suma. (solució en apunts)
//Té un error, arregla el codi.

let a = prompt("¿Primer número?")
let b = prompt("¿Segundo número?")
console.log(Number(a) + Number(b));

//5. Calcular l'àrea d’un cercle que mostrarà per pantalla i ens demanarà el radi del cercle. 
// Recorda utilitzar una constante per al número PI.

console.log(`estamos calculando el area de un circulo!`);

let radio2 = prompt("puedes darme el area del circulo?")
console.log(area + pi * (Number(radio2)*Number(radio2)));

//6. 

console.log(`estamos calculando las dimensiones de un caja!`);

console.log(`puedes darme los Centimetros de la caja?`)

const boxLength = Number(prompt("Largo: "))
const boxWidth = Number(prompt("Ancho: "))
const boxHeight = Number(prompt("Altura: "))

let volumen = boxLength * boxWidth * boxHeight

let costo = volumen / 5000

console.log(`costo total: ` +Number(costo) + ` €`);

//7.

let age = Number(prompt(`HELLO how old r u?`))
let votar: string
let validador: string
if(age < 0 || age > 150){
    validador = "edad incorrecta"
    console.log(validador);                // en caso de que edad sea negativo o mayor que 150 
} else if(age > 17) {                      // se mostrara un mensaje que devolvera error
    votar= "puedes votar yupi"
    console.log(votar);
    
}else{
    votar = "no votas"
    console.log(votar)
}

//8.