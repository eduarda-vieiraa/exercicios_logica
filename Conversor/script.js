
const celsiusInput = document.getElementById('celsiusInput');
const resultDisplay = document.getElementById('resultDisplay');

celsiusInput.addEventListener('input', () => {
    let celsius = celsiusInput.value;
    if (celsius !== '') {
    
        let fahrenheit = (celsius * 9 / 5) + 32;

        resultDisplay.innerText = `${celsius}°C é igual a ${fahrenheit.toFixed(2)}°F`;
    } else {
       
        resultDisplay.innerText = '';
    }
});
