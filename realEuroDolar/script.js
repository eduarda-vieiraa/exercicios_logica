// Este programa converte valores em BRL para USD ou EUR, de acordo com a escolha do usuário.
// usando a seguinte logica de conversão:
// 1 USD = 5.50 BRL
// 1 EUR = 6.14 BRL

const botaoConverter = document.getElementById('botaoConverter');
const resultado = document.getElementById('resultado');

// Taxas de conversão
const taxaUSD = 5.50; 
const taxaEUR = 6.14; 

botaoConverter.addEventListener('click', () => {
    const valorBRL = parseFloat(document.getElementById('valorBRL').value);
    const moeda = document.getElementById('moeda').value;
    
    let resultadoConversao = 'Resultado: ';
    
    if (isNaN(valorBRL) || valorBRL <= 0) {
        resultadoConversao += 'Por favor, insira um valor válido em BRL.';
    } else {
        if (moeda === 'USD') {
            const valorConvertido = valorBRL / taxaUSD;
            resultadoConversao += `USD ${valorConvertido.toFixed(2)}`;  
        } else if (moeda === 'EUR') {
            const valorConvertido = valorBRL / taxaEUR;
            resultadoConversao += `EUR ${valorConvertido.toFixed(2)}`;  
        }  
    } 
    resultado.innerText = resultadoConversao;
});
