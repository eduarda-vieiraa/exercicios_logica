const prompt = require('prompt-sync')();
let linhas = parseInt(prompt("Digite o número de linhas do triângulo: "));

for (let i = 1; i <= linhas; i++) {
    let linha = '';

    for (let j = 1; j <= i; j++) {
        linha += ' ';
    }

    for (let j = 1; j <= (linhas - i) * 2 + 1; j++) {
        linha += '*';
    }

    console.log(linha);
}

