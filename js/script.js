// Selecionando todo o formulario:
const form = document.querySelector('#form');

// Selecionando todos os inputs:
const nameInput = document.querySelector('#name');
const emailInput = document.querySelector('#email');
const passwordInput = document.querySelector('#password');
const jobSelect = document.querySelector('#job');
const messageTextArea = document.querySelector('message');

// Fazendo Validacao:
form.addEventListener('submit', (event) => {
    event.preventDefault();

    // Verifica se o input 'name' esta vazio:
    if(nameInput.value === "") {
        alert('Por favor, preencha seu nome!!!');
        return;
    }

    // Verifica se o input 'email' esta preenchido e se e valido:
    if(emailInput.value === "" || !isEmailValid(emailInput.value)) {
        alert('Por favor, preencha seu email!!!');
        return;
    }

    // Verifica se o input 'password' esta preenchido:
    if(!validatePassword(passwordInput.value, 8)) {
        alert('A senha precisa ter no minimo 8 digitos.');
        return;
    }

    // Verifica se o 'select' foi selecionado:
    if(jobSelect.value === "") {
        alert('Por favor, selecione a sua situacao!');
        return;
    }

    // Verifica se a 'textarea' esta preenchida:
    if(messageTextArea.value === "") {
        alert('Por favor, escreva uma mensagem!');
        return;
    }

    // Se todos os campos estiverem corretamente preenchidos, envie o form:
    form.submit();
})

// Function que valida email:
function isEmailValid(email) {

    // Criando uma 'regex' para validar o email:
    const emailRegex = new RegExp(
        // usuario12@gmail.com
        /^[a-zA-Z0-9._-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]{2,}$/
    );

    // Validacao da 'regex':
    if(emailRegex.test(email)) {
        return true;
    }
    return false;
}

// Function que valida a senha:
function validatePassword(password, minDigits) {

    if(password.length >= minDigits) {
        // Senha Valida
        return true;
    }
    // Senha Invalida:
    return false;
}

