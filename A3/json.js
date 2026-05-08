"use strict";
// Json Example
// si no se pone `` no sera un Json 
let alumno = `{
  "nom": "pau",
  "dni": "123456",
  "graduado": false,
  "matriculado": true,
  "practica_1": null,
  "notas": [9,2,6],
  "edad": 21,
  "modulos": [ 
        {
            "nombre": "llenguatge de marques",
            "horas": 66
        },
        {
            "nombre": "base de datos",
            "horas": 132
        }
    ]
}`;
console.log(alumno);
// Json -> JS
// ctr + k + c comentar todo ---> ctr + k + o descomentar/
// let alumno_obj: any = JSON.parse(alumno); // Parse
// console.log(alumno_obj);
// console.log(alumno_obj.edad);
// console.log(alumno_obj.modulos[1].horas);
// alumno_obj.notas[1] = 0;
// alumno_obj.notas[2] = 10;
// alumno = JSON.stringify(alumno_obj,null,8);
// console.log(alumno);
async function pedirPokemons() {
    const respuesta = await fetch('https://pokeapi.co/api/v2/pokemon?limit=10');
    const pokemons = await respuesta.json();
    //console.log(datos);
    //let pokemons = JSON.parse(datos);
    console.log(pokemons);
}
pedirPokemons();
