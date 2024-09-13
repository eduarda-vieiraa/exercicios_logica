const botaoCalcular = document.getElementById('calcular');
const resultado = document.getElementById('resultado');

// Taxas de frete por modalidade (em reais por kg)
const taxaPadrao = 10.00; // Padrão: R$10,00 por kg
const taxaExpresso = 20.00; // Expresso: R$20,00 por kg
const taxaInternacional = 30.00; // Internacional: R$30,00 por kg

botaoCalcular.addEventListener('click', () => {
    const peso = parseFloat(document.getElementById('peso').value);
    const modalidade = document.getElementById('modalidade').value;

    if (isNaN(peso) || peso <= 0) {
        resultado.innerText = 'Por favor, insira um peso válido para o pacote.';
    } else {
        let valorFrete = 0;

        switch (modalidade) {
            case 'padrao':
                valorFrete = peso * taxaPadrao;
                break;
            case 'expresso':
                valorFrete = peso * taxaExpresso;
                break;
            case 'internacional':
                valorFrete = peso * taxaInternacional;
                break;
        }

        resultado.innerText = `O valor do frete é R$ ${valorFrete.toFixed(2)}.`;
    }
});
