document.addEventListener('DOMContentLoaded', () => {
    // 1. Pega os elementos do formulário e da mensagem
    const loginForm = document.getElementById('loginForm');
    const usernameInput = document.getElementById('username');
    const passwordInput = document.getElementById('password');
    const messageDisplay = document.getElementById('message');

    // 2. Define credenciais de teste fixas
    // No seu ambiente real, esta verificação seria feita no servidor (backend)
    const TEST_USER = "teste@exemplo.com";
    const TEST_PASS = "123456";

    // 3. Adiciona um "ouvinte" para o evento de envio do formulário
    loginForm.addEventListener('submit', (event) => {
        // Impede o envio padrão do formulário (que recarregaria a página)
        event.preventDefault();

        // 4. Limpa mensagens anteriores
        messageDisplay.textContent = '';
        messageDisplay.classList.remove('success-message', 'error-message');

        // 5. Obtém os valores inseridos pelo usuário
        const username = usernameInput.value;
        const password = passwordInput.value;

        // 6. Lógica de validação (simulada)
        if (username === TEST_USER && password === TEST_PASS) {
            // Sucesso no Login
            messageDisplay.textContent = 'Login realizado com sucesso! Redirecionando...';
            messageDisplay.classList.add('success-message');
            
            // Simula o redirecionamento (substitua pela sua lógica real)
            setTimeout(() => {
                // window.location.href = "/pagina-protegida.html";
                console.log("Usuário logado e pronto para o próximo teste!");
            }, 2000);

        } else {
            // Falha no Login
            messageDisplay.textContent = 'Usuário ou senha inválidos. Tente novamente.';
            messageDisplay.classList.add('error-message');
        }
    });
});
