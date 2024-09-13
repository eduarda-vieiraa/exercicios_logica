const prompt = require('prompt-sync')();


let alcool = 0;
let gasolina = 0;
let diesel = 0;

let codigo;


do {
   
    codigo = parseInt(prompt("Digite o código do combustível (1. Álcool, 2. Gasolina, 3. Diesel, 4. Fim): "));
    
    switch (codigo) {
        case 1:
            alcool++;
            console.log("Álcool");
            break;
        case 2:
            gasolina++;
            console.log("Gasolina");
            break;
        case 3:
            diesel++;
            console.log("Diesel");
            break;
        case 4:
            // Código para encerrar o programa
            console.log("MUITO OBRIGADO");
            break;
        default:
            // Código inválido
            console.log("Código inválido. Por favor, digite um código válido.");
            break;
    }
} while (codigo !== 4);

// Exibir a quantidade de clientes que abasteceram cada tipo de combustível
console.log(`Quantidade de clientes que abasteceram Álcool: ${alcool}`);
console.log(`Quantidade de clientes que abasteceram Gasolina: ${gasolina}`);
console.log(`Quantidade de clientes que abasteceram Diesel: ${diesel}`);
