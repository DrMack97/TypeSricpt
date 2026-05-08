


const notas1: number[] = [10,7,8,4,9];

const aprovats: number[] = [];

let contador2= 0;

console.log("Notas de los estudiantes:")

notas1.forEach(nota => {
    contador2++;
    console.log(contador2+" nota : "+nota);

    if(nota !== null){
        if (nota > 5) {
            aprovats.push(nota);
        }
    }
});

aprovats.forEach(aprovado => {
    
    console.log(" estas aprovado! " +aprovado);


});

