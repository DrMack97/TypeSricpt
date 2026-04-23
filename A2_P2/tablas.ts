/**
 * 5. tablas
 */

const entrada = prompt("¿De qué número quieres la tabla?");
const num = parseInt(entrada || "");

if (isNaN(num)) {
    alert("no es válido.");
} else {
    let resultado = `--- Tabla del ${num} ---\n`;
    
    for (let i = 1; i <= 10; i++) {
        resultado += `${num} x ${i} = ${num * i}\n`;
    }
    
    alert(resultado);
}
