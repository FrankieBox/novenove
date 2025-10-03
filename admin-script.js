document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Seleciona todos os botões na barra lateral (sidebar)
    // O querySelectorAll('.sidebar button') busca os botões que estão dentro da div com a classe "sidebar".
    const sidebarButtons = document.querySelectorAll('.sidebar button');
    
    // 2. Seleciona o botão de Sair
    const logoutBtn = document.getElementById('logoutBtn');
    
    // 3. Configuração da Navegação (Redirecionamento)
    // Itera sobre cada botão da barra lateral para adicionar um evento de clique
    sidebarButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            // Pega o nome do arquivo HTML do atributo 'data-page' definido no HTML
            const targetPage = button.getAttribute('data-page');
            
            if (targetPage) {
                // Redireciona o navegador para a página específica.
                window.location.href = targetPage;
            } else {
                // Mensagem de alerta caso o botão ainda não tenha uma página definida
                alert("Página em construção! Implemente o arquivo: " + button.textContent.trim());
            }
        });
    });

    // 4. Funcionalidade do Botão Sair
    logoutBtn.addEventListener('click', () => {
        
        // Simulação de encerramento de sessão
        console.log("Sessão encerrada e redirecionando para login.");
        
        // Redireciona de volta para a tela de login (index.html)
        alert("Você saiu do Painel Administrativo.");
        window.location.href = 'index.html'; 
    });
    
    // Opcional: Mensagem de confirmação de carregamento
    console.log("Dashboard ADM (admin-script.js) carregado com sucesso!");
});
