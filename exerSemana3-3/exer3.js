
const prompt = require("prompt-sync")();

const idade = Number(prompt("Digite a sua idade:"));
let faseDaVida;

switch (true) {
  case (idade >= 0 && idade <= 12):
    faseDaVida = "Como dizia minha avó, você é um bebê.";
    break;

  case (idade >= 13 && idade <= 19):
    faseDaVida = "Como dizia minha avó, você é um adolescente.";
    break;

  case (idade >= 20 && idade <= 64):
    faseDaVida = "Este é o momento para experimentar e aprender com a vida.";
    break;

  case (idade >= 65):
    faseDaVida = "A melhor idade para alguns, faça viagens se puder.";
    break;

  default:
    faseDaVida = "Está achando que é um vampiro?";
}

console.log(`${faseDaVida}`);
