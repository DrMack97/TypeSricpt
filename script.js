"use strict";
// let prova:string = "hola";
/* para hacer la conversion:
    - tsc .\script.ts -
*/
//declarar tipo de variable e indicar que viene de un elemento de nuestro html
let button = document.querySelector('#sendButtun');
let input = document.querySelector('#inputid');
let errorDiv = document.querySelector('#textError');
let selectError = document.querySelector('#textError');
let checkError = document.querySelector('#textError');
let radioError = document.querySelector('#textError');
let input2 = document.querySelector('#inputid2');
let errorDiv2 = document.querySelector('#textError2');
button.addEventListener('click', () => {
    //validar el campo de texto
    let inputValue = input.value;
    //console.log(inputValue);
    if (inputValue.length < 4) {
        input.classList.add('inputError');
        selectError.style.display = "inline";
    }
    else {
        input.classList.remove('inputError');
        errorDiv.style.display = "none";
        //enviar form
    }
    //validar el select 
    let cicloElement = document.querySelector('#ciclo');
    let ciclo = cicloElement.value;
    console.log(cicloElement);
    console.log(ciclo);
    //if(ciclo === ""){}
    if (ciclo) {
        cicloElement.classList.add('inputError');
        selectError.style.display = "inline";
    }
    else {
        cicloElement.classList.remove('inputError');
        selectError.style.display = "inline";
    }
    //validar el radioButton
    let radioElement = (document.querySelector('input[name="genero"]:checked'));
    //let radioValue = radioElement.value;
    console.log(radioElement);
    //console.log(radioValue);
    if (!radioElement) {
        radioError.style.display = "inline";
    }
    else {
        radioError.style.display = "none";
    }
    //validar el checkbox
    let checkElement = (document.querySelector('input[name="genero"]:checked'));
    //let radioValue = radioElement.value;
    console.log(checkElement);
    //console.log(radioValue);
    if (!radioElement) {
        checkError.style.display = "inline";
    }
    else {
        checkError.style.display = "none";
    }
});
input2.addEventListener('blur', () => {
    let inputValue = input2.value;
    if (inputValue.length < 4) {
        input2.classList.add('inputError');
        errorDiv2.style.display = "inline";
    }
    else {
        input2.classList.remove('inputError');
        errorDiv2.style.display = "inline";
    }
});
let divs = document.querySelectorAll('.divs');
console.log(divs);
divs.forEach(div => {
    console.log(div.id);
    console.log(div.textContent);
});
//declaramos tipo de variable e indicar que viene de un elemento de nuestro html
let button2 = document.querySelector('#boton_crear');
let ContainerDiv = document.querySelector('#container');
button2.addEventListener('click', () => {
    console.log('click');
    // //crear un nuevo div
    // let div = document.createElement('div');
    // div.textContent = "Nuevo div creado";
    // div.id= "divNuevo";
    // ContainerDiv.appendChild(div);
    // // crear un link y printarlo
    // let link = document.createElement('a');
    // link.href= "https://www.google.com";
    // link.textContent = "Link to google";
    // ContainerDiv.appendChild(link);
    // ContainerDiv.innerHTML += `<div id="divNuevo"> Nuevo div creado </div> <a href="https://www.google.com"> Link to google </a>`;
    // ContainerDiv.innerHTML += '<a href="https://www.google.com"> Link to google </a>';
    ContainerDiv.innerHTML += `
        <div id="divNuevo"> 
            Nuevo div creado
            <a href="https://www.google.com">
                Link to google 
            </a>
        </div>
    `;
    let div = document.createElement('div');
    div.textContent = "este div se creo con createElement";
    div.id = "divNuevo2";
    let link = document.createElement('a');
    link.href = "https://www.google.com";
    // indica que el va dentro del primero 
});
let textArea = document.querySelector('textArea');
textArea.addEventListener('input', () => {
    console.log('input');
    console.log(textArea);
});
// let div1:HTMLElement = (document.querySelector('#div1') as HTMLElement);
// div1.addEventListener('click',(event)=> {
//     console.log(event)
//     console.log(event.target);
//     console.log(event.currentTarget);
// })
/*function func1(param1:String,param2:number):string{
    return "hola";
}

(param1:String, param2:number) => {

}*/ 
