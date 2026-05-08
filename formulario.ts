let button5: HTMLButtonElement = (document.querySelector('#boton_crear') as HTMLButtonElement);
let ContainerDiv2:HTMLElement = (document.querySelector('#container') as HTMLElement); 
let input5: HTMLInputElement = (document.querySelector('#inputid') as HTMLInputElement);
let selectError1: HTMLElement = (document.querySelector('#textError') as HTMLElement); 
let cicloElement1:HTMLSelectElement = (document.querySelector('#select') as HTMLSelectElement);

button5.addEventListener('click',()=>{

    //validar el campo de texto

    let inputValue: string = input5.value;

    //console.log(inputValue);
    if(inputValue.length < 1){

        input5.classList.add('inputError');
        
        selectError1.style.display= "inline";
        
    }else{
        let ciclo = cicloElement1.value;
        let div = document.createElement('div');
        div.textContent = "nuevo div";
        
        //enviar form

    }
});
