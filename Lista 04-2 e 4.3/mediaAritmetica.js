const prompt = require('prompt-sync')(); 
let soma = 0;


for (let i = 1; i <= 10; i++) {
    let valor = parseFloat(prompt(`Digite o valor ${i}: `));
    soma += valor; 
}


let media = soma / 10;


console.log(`A média aritmética dos valores é: ${media.toFixed(2)}`);
