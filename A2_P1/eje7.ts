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