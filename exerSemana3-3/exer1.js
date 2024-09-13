
const prompt = require('prompt-sync')();

const numeroCartao = prompt("Digite o número do cartão de crédito com 16 dígitos:");

// Verifica se o número do cartão possui 16 dígitos
const medidaPermitida = numeroCartao.length === 16;
const primeiroDigito = numeroCartao[0];

let bandeira;

if (medidaPermitida) {
    if (primeiroDigito === '4') {
        bandeira = 'Visa';
    } else if (primeiroDigito === '5') {
        bandeira = 'Mastercard';
    } else if (primeiroDigito === '6') {
        bandeira = 'Discover';
    } else {
        bandeira = 'Inválido';
    }
} else {
    bandeira = 'Inválido';
}

// Verifica a bandeira e exibe a mensagem apropriada
if (bandeira === 'Inválido') {
    console.log("O número do cartão de crédito está incorreto.");
} else {
    console.log(`O número do cartão de crédito está correto e a bandeira é: ${bandeira}.`);
}
