"use strict";
// let prova:string = "hola";
let button = document.getElementById('sendid');
let input = document.querySelector('#sendid');
button.addEventListener('click', () => {
    let inputValue = document.getElementById('inputid')?.nodeValue;
    //console.log(inputValue);
    if (inputValue.length < 4) {
        console.log('Long error');
        input?.classList.add('inputError');
    }
    else {
        //eviar form
    }
});
let div1 = document.querySelector('#div1');
div1.addEventListener('click', (event) => {
    console.log(event);
    console.log(event.target);
    console.log(event.currentTarget);
});
/*function func1(param1:String,param2:number):string{
    return "hola";
}

(param1:String, param2:number) => {

}*/ 
