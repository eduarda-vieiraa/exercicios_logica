
require('prompt-sync')()

const mes = Number(prompt("Insira onúmero correspondente ao mês (1 a 12):"))

let estacao

switch (mes) {
    case 12:
    case 1:
    case 2:
        estacao = 'Inverno'
        break;
    case 3:
    case 4:
    case 5:
        estacao = 'Primavera'
        break;
    case 6:
    case 7:
    case 8:
        estacao = 'Verão'
        break;
    case 9:
    case 10:
    case 11:
        estacao = 'Outono'
        break;
    default:
        estacao = 'Mês inválido'
        break
}

console.log(estacao)
