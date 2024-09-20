var prompt = require('prompt-sync')()
let n1 = Number(prompt("Insira a primeira avaliação do aluno:"))
let n2 = Number(prompt("Insira a segunda avaliação do aluno:"))
let n3 = Number(prompt("Insira a primeira avaliação do aluno:"))

let media = (n1 + n2 + n3) /3
console.log ('A sua média é:')
let resultado

if (media >= 85) {
    resultado = 5 
}
 else if (media >= 70) {
    resultado = 3 
 }
else {
    resultado = 0 
}
let mediafinal = media + resultado
console.log ('Sua nota final é: ${media final.toFixed(1)}')
if (mediafinal <= 70){
    console.log ('Você não atingiu a media final')
}
else{
    console.log ('Você atingiu a media final')
}