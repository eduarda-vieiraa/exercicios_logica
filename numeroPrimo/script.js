const botaoVerificar = document.getElementById('verificar');
const resultado = document.getElementById('resultado');

botaoVerificar.addEventListener('click', () => {
    const numero = parseInt(document.getElementById('numero').value);

    if (isNaN(numero) || numero < 0 || numero > 100) {
        resultado.innerText = 'Insira um número válido entre 0 e 100.';
    } else {
        if (numero < 2) {
            resultado.innerText = `O número ${numero} não é primo.`;
            return;
        }

        let ehPrimo = true;

        for (let i = 2; i <= Math.sqrt(numero); i++) {
            if (numero % i === 0) {
                ehPrimo = false;
                break;
            }
        }

        if (ehPrimo) {
            resultado.innerText = `O número ${numero} é primo.`;
        } else {
            resultado.innerText = `O número ${numero} não é primo.`;
        }
    }
});
