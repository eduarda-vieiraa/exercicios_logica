var prompt = require('prompt-sync')()

let n1 = Number(prompt("Digite o peso:"))
let n2 = Number(prompt("Digite a altura:"))

let imc = n1 / (n2 * n2)
let resultado

if (imc > 18.5 && imc < 25){
    resultado = "Você está abaixo do peso"
}
else if (imc >= 25 && imc < 30){
    resultado = "Você está com sobrepeso"
}    
else if (imc >= 30 && imc <35){
    resultado = "Você está com obesidade grau I"
}
else if (imc >= 35 && imc <40){
    resultado = "Você está com obesidade grau II"
}
else {
    resultado = "Você está com obesidade grau III"
}

console.log (`Seu imc é $ {imc.toFixed(1)'} ${resultado}`)
