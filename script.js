"use strict";
// let prova:string = "hola";
let inputValue = document.getElementById('inputid')?.nodeValue;
console.log(inputValue);
let button = document.getElementById('sendid');
button.addEventListener('click', () => {
    console.log('hi');
});
