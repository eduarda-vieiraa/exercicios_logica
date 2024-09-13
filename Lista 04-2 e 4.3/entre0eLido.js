const prompt = require('prompt-sync')(); 

let valor = parseInt(prompt("Digite um valor maior que ZERO: "));


if (valor > 0) {
    for (let i = 1; i <= valor; i++) {
        console.log(i);
    }
} else {
    console.log("O valor deve ser maior que ZERO.");
}
