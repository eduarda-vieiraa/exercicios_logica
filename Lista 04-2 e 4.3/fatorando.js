const prompt = require('prompt-sync')();
let n = prompt("Digite um número para calcular o fatorial: ");
let resultado = 1;

for (let i = n; i > 1; i--) {
    resultado *= i;
}

console.log(`O fatorial de ${n} é: ${resultado}`);
