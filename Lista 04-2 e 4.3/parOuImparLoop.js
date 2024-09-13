const prompt = require('prompt-sync')();

while (true) {
  const entrada = prompt('Digite um valor inteiro: ');
  const valor = parseInt(entrada, 10);

  if (valor <= 0) {
    break; 
  }

  if (valor % 2 === 0) {
    console.log(`O valor ${valor} é PAR.`);
  } else {
    console.log(`O valor ${valor} é ÍMPAR.`);
  }
}
