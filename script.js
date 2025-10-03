document.addEventListener('DOMContentLoaded', () => {
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageDisplay = document.getElementById('message');

    // 1. Definição das credenciais FIXAS para TESTE
    // NOVAS CREDENCIAIS DO ADMINISTRADOR
    const ADMIN_USER = "admin";           // Usuário do Administrador
    const ADMIN_PASS = "99";              // Senha do Administrador
    
    // NOVAS CREDENCIAIS DO USUÁRIO COMUM
    const TEST_USER = "user";             // Usuário Comum
    const TEST_PASS = "11";               // Senha Comum

    loginForm.addEventListener('submit', (event) => {
        event.preventDefault();

        messageDisplay.textContent = '';
        messageDisplay.classList.remove('success-message', 'error-message');

        const username = usernameInput.value;
        const password = passwordInput.value;

        // 2. Lógica de Login
        
        // **A. Verifica se é o Administrador**
        if (username === ADMIN_USER && password === ADMIN_PASS) {
            
            messageDisplay.textContent = 'Login ADM realizado com sucesso! Redirecionando para o painel...';
            messageDisplay.classList.add('success-message');
            
            // REDIRECIONAMENTO ADM
            setTimeout(() => {
                window.location.href = "admin-dashboard.html"; 
            }, 1500);

        // **B. Verifica se é um usuário comum**
        } else if (username === TEST_USER && password === TEST_PASS) {
            
            messageDisplay.textContent = 'Login realizado com sucesso! Redirecionando para o conteúdo...';
            messageDisplay.classList.add('success-message');
            
            // REDIRECIONAMENTO COMUM
            setTimeout(() => {
                window.location.href = "conteudo-assinante.html";
            }, 1500);
            
        // **C. Falha na autenticação**
        } else {
            messageDisplay.textContent = 'Usuário ou senha inválidos. Tente novamente.';
            messageDisplay.classList.add('error-message');
        }
    });
});
