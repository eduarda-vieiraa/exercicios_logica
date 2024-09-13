const prompt = require('prompt-sync')(); 

let valor1 = parseFloat(prompt("Digite o primeiro valor: "));
let valor2 = parseFloat(prompt("Digite o segundo valor: "));


while (valor2 === 0) {
    console.log("O segundo valor não pode ser zero. Por favor, insira um novo valor.");
    valor2 = parseFloat(prompt("Digite o segundo valor novamente: "));
}


let resultado = valor1 / valor2;
console.log(`O resultado da divisão é: ${resultado}`);
