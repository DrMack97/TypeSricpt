/**
 * 9.Escriu un codi que primer pregunti el nom de l'usuari, i si aquest és admin, pregunti per la contrasenya, 
 * i si aquesta adivinar un número del 1 al 100, i li digui si ha encertat, o el número és més gran o més petit. 
 * Si diu un número menor de 1 o major de 100 o una lletra ha de donar error.
 */
//let nombre : String
//nombre = "david"
let trueN = 50
let passwordValid : Number = 9797

let usr = (prompt('bienvenido admin, escribe tu nombre'))
////
    let nombre = (usr == 'david') ? "Hola David" : alert('0')
    console.log(nombre)

    let password = Number(prompt('do you have da password, david?'))

        if (password == passwordValid) {
            console.log("temia que no fueses tu")
        } else {
            console.log("wrong password ")
        }
    console.log()

    let num = Number(prompt("Venga lets play, adivina el número que estoy pensando del 1 al 100, (0 = exit)"));

do {
    if(num == 0){
        
        break;
    }

    if (num < trueN) {
        console.log("es MAYOR");
        num = Number(prompt("Intenta con un número más grande:"));
    } else if (num > trueN) {
        console.log("es MENOR");
        num = Number(prompt("intenta de nuevo: "));
    } else {
        console.log("hurra ganador");
    }
} while (num != trueN);

if (num == 0) {
        console.log("Saliste del juego, respuestas:  ");
    console.log("password: " + passwordValid);
    console.log("answer always was: " + trueN);
} else {
    console.log("hurra ganador");
}