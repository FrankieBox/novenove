document.addEventListener('DOMContentLoaded', () => {
    
    // 1. Seleciona todos os botões na barra lateral
    const sidebarButtons = document.querySelectorAll('.sidebar button');
    
    // 2. Seleciona o botão de Sair
    const logoutBtn = document.getElementById('logoutBtn');
    
    // 3. Configuração da Navegação
    sidebarButtons.forEach(button => {
        button.addEventListener('click', () => {
            
            // Pega o nome do arquivo HTML do atributo 'data-page'
            const targetPage = button.getAttribute('data-page');
            
            if (targetPage) {
                // Redireciona o navegador para a nova página (Ex: "cadastrar-usuario.html")
                window.location.href = targetPage;
            } else {
                alert("Página em construção! Implemente o arquivo: " + button.textContent.trim());
            }
        });
    });

    // 4. Funcionalidade do Botão Sair
    logoutBtn.addEventListener('click', () => {
        
        console.log("Sessão encerrada e redirecionando para login.");
        
        // Redireciona de volta para a tela de login (index.html)
        alert("Você saiu do Painel Administrativo.");
        window.location.href = 'index.html'; 
    });
    
    console.log("Dashboard ADM (admin-script.js) carregado com sucesso!");
});
