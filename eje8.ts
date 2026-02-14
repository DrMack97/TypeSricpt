/**
 * 8.Usando el constructor if..else, escribe un código que obtenga a través de un prompt un número y entonces muestre en un alert:
a.
i.1, si el valor es mayor que cero,
ii.-1, si es menor que cero,
iii.0, si es igual a cero.
b.Reescriba esta condición if usando el operador ternario '?':
c.Reescriba el if..else utilizando operadores ternarios múltiples ?.
d.Reescriba amb un switch case
 */

//a.
let value = Number(prompt('Escribe un número', "0"))

if (value > 0) {
alert('1');
} else if (value < 0) {
alert('-1');
} else {
alert('0');
}

//b. operador ternario

let valor = Number(prompt('Escribe un número'))
////
let valo2 = (valor > 0) ? alert('1') : alert('0')

//c. ternarios multiples 

let valor3 = Number(prompt('Escribe un número'))

    let ts =
    (valor3 < 0) ? '-1' :
        (valor3 == 0) ? '0' :
            (valor3 > 0) ? '1' :
                ' '
    alert(ts)                                //si no esta "alert(ts)"
                                            //los mensajes no se mostraran
/**
 * El primer signo de pregunta revisa (valor3 < 0.)
 * 
Si es cierto, devuelve '-1'. De lo contrario, continúa a la expresión 
que está después de los dos puntos :, la cual revisa si (valor3 == 0)

Si es cierto, devuelve 0 De lo contrario, continúa con la expresión que está 
después de los dos puntos siguientes :, la cual revisa si (valor3 > 0)

Si es cierto, devuelve '1'. De lo contrario, continúa a la expresión
que está después de los dos puntos :, la cual devuelve ' ' 
se debe poner algo de lo contrario dara error, en nuestro caso un espacio en blanco
 */

//d.Reescriba amb un switch case
let key = Number(prompt('Escribe un número'))

switch (key) {
    case 0:
        console.log(key + '0')
        break;
    case -1:
        console.log(key + '-1')
        break;
    case 1:
        console.log(key+ '1')
        break;
    default:
        console.log("not found")
        break;
}