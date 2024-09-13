
require('prompt-sync')()

const animal = prompt("Digite o nome de um animal:")

let classificacao

switch (animal.toLowerCase()) {
    
    case 'cachorro':
    case 'gato':
    case 'elefante':
    case 'tigre':
    case 'urso':
        classificacao = 'Mamífero'
        break;
    
    
    case 'pássaro':
    case 'aguia':
    case 'peru':
    case 'pinguim':
    case 'corvo':
        classificacao = 'Ave'
        break;

    
    case 'cobra':
    case 'jacaré':
    case 'lagarto':
    case 'tartaruga':
    case 'iguana':
        classificacao = 'Réptil'
        break;

    
    case 'sapo':
    case 'rã':
    case 'salamandra':
    case 'tritão':
    case 'perereca':
        classificacao = 'Anfíbio'
        break;

    default:
        classificacao = 'Classificação não encontrada';
        break;
}

console.log(`O animal ${animal} é classificado como: ${classificacao}`);
