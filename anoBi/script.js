const botaoVerificar = document.getElementById('verificar');
const resultado = document.getElementById('resultado');

botaoVerificar.addEventListener('click', () => {
    const ano = parseInt(document.getElementById('ano').value);

    if (isNaN(ano)) {
        resultado.innerText = 'Por favor, insira um ano válido.';
    } else {
        if ((ano % 4 === 0 && ano % 100 !== 0) || (ano % 400 === 0)) {
            resultado.innerText = `O ano ${ano} é bissexto.`;
        } else {
            resultado.innerText = `O ano ${ano} não é bissexto.`;
        }
    }
});
