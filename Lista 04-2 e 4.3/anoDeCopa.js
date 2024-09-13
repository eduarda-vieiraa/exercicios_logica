const prompt = require('prompt-sync')(); 

let ano = 1;

while (ano !== 0) {
    ano = parseInt(prompt("Digite um ano (ou 0 para sair): "));

    if (ano === 0) {
        console.log("Encerrando o programa.");
        break;
    }

    if (ano < 1930) {
        console.log("A primeira Copa do Mundo foi em 1930.");
    } else if (ano === 1942 || ano === 1946) {
        console.log(`Em ${ano} a copa do mundo foi cancelada devido à Segunda Guerra Mundial.`);
    } else if ((ano - 1930) % 4 === 0) {
        console.log(`${ano} é ano de Copa do Mundo!`);
    } else {
        console.log(`${ano} não é ano de Copa do Mundo.`);
    }
}
