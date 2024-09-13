
const addButton = document.getElementById('addButton');
const subtractButton = document.getElementById('subtractButton');
const multiplyButton = document.getElementById('multiplyButton');
const divideButton = document.getElementById('divideButton');
const resultDisplay = document.getElementById('resultDisplay');


addButton.addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const result = num1 + num2;
    resultDisplay.innerText = 'Resultado: ' + result;
});

subtractButton.addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const result = num1 - num2;
    resultDisplay.innerText = 'Resultado: ' + result;
});

multiplyButton.addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    const result = num1 * num2;
    resultDisplay.innerText = 'Resultado: ' + result;
});

divideButton.addEventListener('click', () => {
    const num1 = parseFloat(document.getElementById('number1').value);
    const num2 = parseFloat(document.getElementById('number2').value);
    let result;
    if (num2 !== 0) {
        result = num1 / num2;
    } else {
        result = 'Erro: Divisão por zero';
    }
    resultDisplay.innerText = 'Resultado: ' + result;
});
