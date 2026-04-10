// let prova:string = "hola";


/* para hacer la conversion:
    - tsc .\script.ts -
*/

let button: HTMLButtonElement  = (document.getElementById('sendButtun') as HTMLButtonElement);
let input: HTMLInputElement = (document.querySelector('#inputid') as HTMLInputElement);
let errorDiv:HTMLElement = (document.querySelector('#textError') as HTMLElement); 
let selectError: HTMLElement = (document.querySelector('#textError') as HTMLElement); 
let checkError: HTMLElement = (document.querySelector('#textError') as HTMLElement); 
let radioError: HTMLElement = (document.querySelector('#textError') as HTMLElement); 


button.addEventListener('click',()=>{

    //validar el campo de texto

    let inputValue: string = input.value;

    //console.log(inputValue);
    if(inputValue.length < 4){

        input.classList.add('inputError');
        
        selectError.style.display= "inline";
        
    }else{
        input.classList.remove('inputError')
        errorDiv.style.display = "none";
        //enviar form
    }

    //validar el select 

    let cicloElement:HTMLSelectElement = (document.querySelector('#ciclo') as HTMLSelectElement);
    let ciclo = cicloElement.value;
    console.log(cicloElement);
    console.log(ciclo);

    //if(ciclo === ""){}
    
    if(ciclo){
        cicloElement.classList.add('inputError');
        selectError.style.display = "inline";

    }else{
        cicloElement.classList.remove('inputError');
        selectError.style.display = "inline";

    }

    //validar el radioButton

        let radioElement: HTMLInputElement = (document.querySelector('input[name="genero"]:checked')) as HTMLInputElement;
        //let radioValue = radioElement.value;
        console.log(radioElement);
        //console.log(radioValue);

        if(!radioElement){
            radioError.style.display = "inline";
        }else{
            radioError.style.display = "none";
        }



    //validar el checkbox
        let checkElement: HTMLInputElement = (document.querySelector('input[name="genero"]:checked')) as HTMLInputElement;
        //let radioValue = radioElement.value;
        console.log(checkElement);
        //console.log(radioValue);

        if(!radioElement){
            checkError.style.display = "inline";
        }else{
            checkError.style.display = "none";
        }
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