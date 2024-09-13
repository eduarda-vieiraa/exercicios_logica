const botaoClassificar = document.getElementById('classificar');
const resultado = document.getElementById('resultado');
const imagemTriangulo = document.getElementById('imagemTriangulo');

// Caminho para as imagens dos triângulos
const imagemEquilatero = 'img/triangulo-equilatero.png'; 
const imagemIsosceles = 'img/triangulo-isosceles.jpg';
const imagemEscaleno = 'img/triangulo-escaleno.jpg'; 

botaoClassificar.addEventListener('click', () => {
    imagemTriangulo.src = ''; 

    const lado1 = parseFloat(document.getElementById('lado1').value);
    const lado2 = parseFloat(document.getElementById('lado2').value);
    const lado3 = parseFloat(document.getElementById('lado3').value);

    if (isNaN(lado1) || isNaN(lado2) || isNaN(lado3) || lado1 <= 0 || lado2 <= 0 || lado3 <= 0) {
        resultado.innerText = 'Por favor, insira valores válidos para todos os lados.';
        return;
    }

    let tipoTriangulo = '';
    if (lado1 === lado2 && lado2 === lado3) {
        tipoTriangulo = 'Equilátero';
        imagemTriangulo.src = imagemEquilatero;
    } else if (lado1 === lado2 || lado2 === lado3 || lado1 === lado3) {
        tipoTriangulo = 'Isósceles';
        imagemTriangulo.src = imagemIsosceles;
    } else {
        tipoTriangulo = 'Escaleno';
        imagemTriangulo.src = imagemEscaleno;
    }

    resultado.innerText = `O triângulo é ${tipoTriangulo}.`;
});
