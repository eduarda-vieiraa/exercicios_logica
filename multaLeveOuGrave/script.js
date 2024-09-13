const botaoVerificar = document.getElementById('verificar');
const resultado = document.getElementById('resultado');

botaoVerificar.addEventListener('click', () => {
    const velocidade = parseFloat(document.getElementById('velocidade').value);

    if (isNaN(velocidade) || velocidade < 0) {
        resultado.innerText = 'Por favor, insira uma velocidade válida.';
    } else if (velocidade <= 80) {
        resultado.innerText = 'Você está dentro do limite de velocidade.';
    } else if (velocidade <= 100) {
        resultado.innerText = 'Você está acima do limite de velocidade. Multa leve.';
    } else {
        resultado.innerText = 'Você está com multa grave. Velocidade excessiva!';
    }
});
