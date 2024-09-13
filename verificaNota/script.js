const botaoVerificar = document.getElementById('verificarButton');
const resultadoDisplay = document.getElementById('resultadoDisplay');

botaoVerificar.addEventListener('click', () => {
    const nota1 = parseFloat(document.getElementById('nota1').value);
    const nota2 = parseFloat(document.getElementById('nota2').value);
    const nota3 = parseFloat(document.getElementById('nota3').value);
    
    let resultado = 'Resultado: ';
    
    if (isNaN(nota1) || isNaN(nota2) || isNaN(nota3)) {
        resultado += 'Por favor, insira todas as notas.';
    } else {
        const media = (nota1 + nota2 + nota3) / 3;

        if (media < 4) {
            resultado += 'Reprovado';
        } else if (media >= 4 && media < 7) {
            resultado += 'Em Recuperação';
        } else {
            resultado += 'Aprovado';
        }
    }

    resultadoDisplay.innerText = resultado;
});
