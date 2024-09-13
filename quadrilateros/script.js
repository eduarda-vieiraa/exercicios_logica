document.getElementById('quadrilateral-form').addEventListener('submit', function(event) {
    event.preventDefault();
    
    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);
    const lado4 = parseFloat(document.getElementById('lado4').value);
    
    let resultado = '';

    if (lado1 === lado2 && lado2 === lado3 && lado3 === lado4) {
        resultado = 'Este é um Quadrado.';
    } else if (lado1 === lado3 && lado2 === lado4) {
        resultado = 'Este é um Retângulo.';
    } else if (lado1 === lado2 && lado3 === lado4 && lado1 !== lado3) {
        resultado = 'Este é um Losango.';
    } else {
        resultado = 'Este é outro tipo de Quadrilátero.';
    }
    
    document.getElementById('resultado').textContent = resultado;
});
