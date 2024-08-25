function showLogin() {
    document.getElementById('login-form').style.display = 'block';
    document.getElementById('register-form').style.display = 'none';
    document.querySelector('.tab-button.active').classList.remove('active');
    document.querySelectorAll('.tab-button')[0].classList.add('active');
}

function showRegister() {
    document.getElementById('login-form').style.display = 'none';
    document.getElementById('register-form').style.display = 'block';
    document.querySelector('.tab-button.active').classList.remove('active');
    document.querySelectorAll('.tab-button')[1].classList.add('active');
}

// Função para verificar se todos os campos estão preenchidos
function areFieldsFilled(form) {
    const inputs = form.querySelectorAll('input');
    for (let input of inputs) {
        if (input.value.trim() === '') {
            return false; // Retorna falso se algum campo estiver vazio
        }
    }
    return true; // Retorna verdadeiro se todos os campos estiverem preenchidos
}

// Função para redirecionar após a verificação
function handleFormSubmission(event) {
    event.preventDefault(); // Previne o envio padrão do formulário

    const form = event.target; // Obtém o formulário do evento
    if (areFieldsFilled(form)) {
        // Redirecionamento para uma nova página (substitua 'pagina-destino.html' pelo URL desejado)
        window.location.href = 'pagina-destino.html';
    } else {
        alert('Por favor, preencha todos os campos.');
    }
}

document.addEventListener('DOMContentLoaded', function() {
    // Manipular o envio do formulário de registro
    document.getElementById('registerForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        const username = document.getElementById('register-username').value;
        const password = document.getElementById('register-password').value;

        let listaUsers = JSON.parse(localStorage.getItem('listaUsers') || '[]');

        listaUsers.push({
            usuario: username,
            senha: password
        });

        localStorage.setItem('listaUsers', JSON.stringify(listaUsers));
        alert('Usuário cadastrado com sucesso!');
        
        // Redireciona o usuário após o cadastro bem-sucedido
        window.location.href = 'pagina-destino.html'; // Substitua 'pagina-destino.html' pelo URL desejado
    });

    // Manipular o envio do formulário de login
    document.getElementById('loginForm').addEventListener('submit', function(event) {
        event.preventDefault(); // Previne o envio padrão do formulário

        const username = document.getElementById('Username').value;
        const password = document.getElementById('password').value;

        let listaUsers = JSON.parse(localStorage.getItem('listaUsers') || '[]');

        const user = listaUsers.find(user => user.usuario === username && user.senha === password);

        if (user) {
            alert('Login bem-sucedido!');
            // Redireciona o usuário após o login bem-sucedido
            window.location.href = 'index.html'; // Substitua 'pagina-destino.html' pelo URL desejado
        } else {
            alert('Usuário ou senha incorretos.');
        }
    });

    // Inicializa com o formulário de login visível
    showLogin();
});
