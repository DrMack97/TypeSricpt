// let prova:string = "hola";

let button: HTMLButtonElement | null = (document.getElementById('sendid') as HTMLButtonElement);
let input: HTMLInputElement | null = (document.querySelector('#sendid') as HTMLInputElement);

button.addEventListener('click',()=>{
    let inputValue: string | null = (document.getElementById('inputid') as HTMLInputElement)?.nodeValue;

    //console.log(inputValue);
    if(inputValue.length < 4){
        console.log('Long error');
        input?.classList.add('inputError');
    }else{
        //eviar form
    }
});

let div1:HTMLElement = (document.querySelector('#div1') as HTMLElement);

div1.addEventListener('click',(event)=> {
    console.log(event)
    console.log(event.target);
    console.log(event.currentTarget);
})

/*function func1(param1:String,param2:number):string{
    return "hola";
}

(param1:String, param2:number) => {

}*/