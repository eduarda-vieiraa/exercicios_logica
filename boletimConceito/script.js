const botaoClassificar = document.getElementById('classificar');
const resultado = document.getElementById('resultado');

botaoClassificar.addEventListener('click', () => {
    const nota = parseFloat(document.getElementById('nota').value);

    if (isNaN(nota) || nota < 0 || nota > 10) {
        resultado.innerText = 'Por favor, insira uma nota válida entre 0 e 10.';
    } else {
        let conceito;

        if (nota >= 9) {
            conceito = 'A';
        } else if (nota >= 7) {
            conceito = 'B';
        } else if (nota >= 5) {
            conceito = 'C';
        } else if (nota >= 3) {
            conceito = 'D';
        } else {
            conceito = 'E';
        }

        resultado.innerText = `O conceito da nota ${nota} é: ${conceito}.`;
    }
});
