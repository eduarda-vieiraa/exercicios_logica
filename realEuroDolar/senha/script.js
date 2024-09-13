// Seleciona os elementos HTML que serão manipulados pelo JavaScript
const textElement = document.getElementById('text'); // Elemento onde o efeito de digitação será exibido
const passwordInput = document.getElementById('passwordInput'); // Campo de entrada onde o usuário digita a senha
const togglePassword = document.getElementById('togglePassword'); // Ícone para mostrar/ocultar a senha
const generatePasswordButton = document.getElementById('generatePasswordButton'); // Botão para gerar uma senha segura
const successMessage = document.getElementById('successMessage'); // Elemento para exibir mensagens sobre a segurança da senha

// Mensagens que serão exibidas no efeito de digitação
const textMessages = ["mantenha-se seguro", "crie uma boa senha"];
let messageIndex = 0; // Índice da mensagem atual que está sendo exibida
let charIndex = 0; // Índice do caractere atual da mensagem
let isDeleting = false; // Flag para saber se estamos apagando o texto
let typingSpeed = 100; // Velocidade da digitação

// Função para criar o efeito de digitação e apagamento
function typeEffect() {
    const currentMessage = textMessages[messageIndex]; // Mensagem atual
    const displayedText = currentMessage.slice(0, charIndex); // Texto a ser exibido

    textElement.textContent = displayedText; // Atualiza o texto exibido no elemento

    if (!isDeleting) { // Se não estamos apagando o texto
        if (charIndex < currentMessage.length) { // Se ainda há caracteres para digitar
            charIndex++; // Avança para o próximo caractere
            typingSpeed = 100; // Velocidade de digitação
        } else { // Se o texto foi completamente digitado
            isDeleting = true; // Começa a apagar
            typingSpeed = 1000; // Aumenta o delay antes de apagar
        }
    } else { // Se estamos apagando o texto
        if (charIndex > 0) { // Se ainda há caracteres para apagar
            charIndex--; // Volta para o caractere anterior
            typingSpeed = 50; // Velocidade de apagamento
        } else { // Se o texto foi completamente apagado
            isDeleting = false; // Começa a digitar novamente
            messageIndex = (messageIndex + 1) % textMessages.length; // Avança para a próxima mensagem
            typingSpeed = 500; // Delay antes de começar a digitar a próxima mensagem
        }
    }

    setTimeout(typeEffect, typingSpeed); // Chama a função novamente depois do delay
}

// Inicia o efeito de digitação
typeEffect();

// Função para alternar entre mostrar/ocultar senha
togglePassword.addEventListener('click', () => {
    const type = passwordInput.getAttribute('type') === 'password' ? 'text' : 'password';
    passwordInput.setAttribute('type', type);

    // Alterna entre os ícones de olho aberto e fechado
    togglePassword.classList.toggle('fa-eye');
    togglePassword.classList.toggle('fa-eye-slash');
});

// Função para gerar uma senha segura
function generateSecurePassword() {
    const length = 10; // Definindo o comprimento desejado para a senha
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789@#$%^&*"; // Conjunto de caracteres válidos
    let password = "";

    for (let i = 0; i < length; i++) {
        const randomIndex = Math.floor(Math.random() * charset.length);
        password += charset[randomIndex];
    }

    return password;
}

// Adiciona um evento ao botão de geração de senha
generatePasswordButton.addEventListener('click', () => {
    const newPassword = generateSecurePassword(); // Gera uma nova senha
    passwordInput.value = newPassword; // Exibe a senha gerada no campo de entrada de senha
    passwordInput.dispatchEvent(new Event('input')); // Dispara o evento de input para validar a nova senha
});

// Adiciona um evento que é acionado sempre que o valor do campo de senha muda
passwordInput.addEventListener('input', () => {
    const password = passwordInput.value; // Obtém o valor atual da senha
    const criteriaNotMet = []; // Array para armazenar critérios não atendidos
    let isValid = true; // Flag para verificar se a senha atende a todos os critérios

    // Limpa a mensagem anterior
    successMessage.innerHTML = '';

    // Critérios de validação
    if (password.length >= 8) {
        successMessage.innerHTML += "✅ Pelo menos 8 caracteres<br>";
    } else {
        successMessage.innerHTML += "❌ Pelo menos 8 caracteres<br>";
        isValid = false;
        criteriaNotMet.push('8 caracteres');
    }

    if (/[A-Z]/.test(password)) {
        successMessage.innerHTML += "✅ Pelo menos uma letra maiúscula<br>";
    } else {
        successMessage.innerHTML += "❌ Pelo menos uma letra maiúscula<br>";
        isValid = false;
        criteriaNotMet.push('uma letra maiúscula');
    }

    if (/[a-z]/.test(password)) {
        successMessage.innerHTML += "✅ Pelo menos uma letra minúscula<br>";
    } else {
        successMessage.innerHTML += "❌ Pelo menos uma letra minúscula<br>";
        isValid = false;
        criteriaNotMet.push('uma letra minúscula');
    }

    if (/\d/.test(password)) {
        successMessage.innerHTML += "✅ Pelo menos um dígito<br>";
    } else {
        successMessage.innerHTML += "❌ Pelo menos um dígito<br>";
        isValid = false;
        criteriaNotMet.push('um dígito');
    }

    if (/[@#$%^&*]/.test(password)) {
        successMessage.innerHTML += "✅ Pelo menos um caractere especial (@, #, $, %, etc.)<br>";
    } else {
        successMessage.innerHTML += "❌ Pelo menos um caractere especial (@, #, $, %, etc.)<br>";
        isValid = false;
        criteriaNotMet.push('um caractere especial');
    }

    // Mensagem final com base na validade da senha
    if (isValid) {
        successMessage.innerHTML += "Esta é uma senha segura!";
    } else {
        successMessage.innerHTML += `Senha fraca :( Tente adicionar ${criteriaNotMet.join(', ')}.`;
    }
});
