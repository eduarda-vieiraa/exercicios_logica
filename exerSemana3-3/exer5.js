
prompt = require('prompt-sync')()

const codigoVeiculo = parseInt(prompt("Digite o código do veículo (1: Carro, 2: Moto):"))

let informacoes

switch (codigoVeiculo) {
    case 1:
        const carro = parseInt(prompt("Digite o código do carro (1: Gol 1.0, 2: Uno Mille):"))
        switch (carro) {
            case 1:
                informacoes = `
                    Modelo: Gol 1.0
                    Marca: Volkswagen
                    Peso: 2.5 toneladas
                    Tanque: 30 litros
                    Valor: R$ 36.000,00
                `;
                break;
            case 2:
                informacoes = `
                    Modelo: Uno Mille
                    Marca: Fiat
                    Peso: 1.8 toneladas
                    Tanque: 45 litros
                    Valor: R$ 22.000,00
                `;
                break;
            default:
                informacoes = 'Carro não encontrado'
                break;
        }
        break;
    
    case 2:
        const moto = parseInt(prompt("Digite o código da moto (1: CG 160, 2: Factor 125):"))
        switch (moto) {
            case 1:
                informacoes = `
                    Modelo: CG 160
                    Marca: Honda
                    Peso: 0.9 toneladas
                    Tanque: 15 litros
                    Valor: R$ 11.500,00
                `;
                break;
            case 2:
                informacoes = `
                    Modelo: Factor 125
                    Marca: Yamaha
                    Peso: 0.8 toneladas
                    Tanque: 13 litros
                    Valor: R$ 9.500,00
                `;
                break;
            default:
                informacoes = 'Moto não encontrada'
                break;
        }
        break;
    
    default:
        informacoes = 'Código de veículo inválido'
        break;
}

console.log(informacoes)
