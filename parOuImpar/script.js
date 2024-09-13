const botaoVerificar = document.getElementById('verificar');
const resultado = document.getElementById('resultado');

botaoVerificar.addEventListener('click', () => {
    const numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero)) {
        resultado.innerText = 'Por favor, insira um número válido.';
    } else {
        if (numero % 2 === 0) {
            resultado.innerText = 'O número é par.';
        } else {
            resultado.innerText = 'O número é ímpar.';
        }
    }
});
