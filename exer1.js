const prompt = require('prompt-sync')()

let número1 = Number(prompt('Digite o primeiro número:'))
let número2 = Number(prompt('Digite o segundo número: '))
let número3 = Number(prompt('Digite o terceiro número:'))

if (número1 > número2 && número2 < número3){
    console.log ("Os número estão em ordem crescente")
}
else if (número1 > número2 && número2 > número3) {
    console.log ('Os números estão em ordem decente')
 }
else {
    console.log ("Os números estão desordenados")
}    

