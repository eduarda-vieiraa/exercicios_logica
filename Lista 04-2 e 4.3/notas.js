const prompt = require('prompt-sync')();

// Lê a quantidade de alunos
const quantidadeAlunos = parseInt(prompt('Digite a quantidade de alunos: '), 10);

if (isNaN(quantidadeAlunos) || quantidadeAlunos <= 0) {
  console.log('Quantidade de alunos inválida.');
  process.exit(); // Encerra o programa se a quantidade for inválida
}

let somaNotas = 0;

for (let i = 0; i < quantidadeAlunos; i++) {
  // Lê a nota do aluno
  const nota = parseFloat(prompt(`Digite a nota do aluno ${i + 1}: `));
  
  if (isNaN(nota) || nota < 0 || nota > 10) {
    console.log('Nota inválida. As notas devem estar entre 0 e 10.');
    i--; // Volta uma iteração para corrigir o erro
    continue;
  }
  
  somaNotas += nota; 
}


const media = somaNotas / quantidadeAlunos;

console.log(`A média das notas é ${media.toFixed(2)}.`);
