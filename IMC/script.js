
function calcularIMC() {
    // Peso e altura do usuário
    const peso = parseFloat(document.getElementById('peso').value);
    const altura = parseFloat(document.getElementById('altura').value);
    const resultadoDiv = document.getElementById('resultado');

    // Garante que os valores são válidos
    if (isNaN(peso) || isNaN(altura) || peso <= 0 || altura <= 0) {
        resultadoDiv.innerHTML = "<p>Por favor, insira valores válidos para peso e altura.</p>";
        return;
    }

    // Calcula o IMC
    const imc = peso / (altura * altura);
    let categoria;

    // Determina nível de IMC
    if (imc < 18.5) {
        categoria = "Abaixo do peso";
    } else if (imc >= 18.5 && imc <= 24.9) {
        categoria = "Peso normal";
    } else if (imc >= 25 && imc <= 29.9) {
        categoria = "Sobrepeso";
    } else if (imc >= 30 && imc <= 34.9) {
        categoria = "Obesidade grau I";
    } else if (imc >= 35 && imc <= 39.9) {
        categoria = "Obesidade grau II";
    } else {
        categoria = "Obesidade grau III";
    }

    // Resultado
    resultadoDiv.innerHTML = `<p>Seu IMC é ${imc.toFixed(2)}. Categoria: ${categoria}.</p>`;
}
