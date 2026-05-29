document.addEventListener('DOMContentLoaded', () => {
    const btnLogin = document.getElementById('btn-login');
    const btnCadastro = document.getElementById('btn-cadastro');
    const painelIdentificacao = document.getElementById('painel-identificacao');
    const painelPrincipal = document.getElementById('painel-principal');
    const saudacaoUsuario = document.getElementById('saudacao-usuario');
    const inputUsuario = document.getElementById('input-usuario');
    const mensagemFeedback = document.getElementById('mensagem-feedback');

    // Função para simular o login e mostrar o painel de estudos
    btnLogin.addEventListener('click', () => {
        const usuario = inputUsuario.value.trim();

        if (usuario === '') {
            mensagemFeedback.textContent = 'Por favor, digite um usuário.';
            mensagemFeedback.className = 'text-xs text-center font-medium mt-1 text-red-400';
            mensagemFeedback.classList.remove('hidden');
            return;
        }

        // Esconde a tela de login e mostra a tela principal
        painelIdentificacao.classList.add('hidden');
        painelPrincipal.classList.remove('hidden');
        painelPrincipal.classList.add('grid');
        
        // Exibe saudação com o nome digitado
        saudacaoUsuario.textContent = `Salve, ${usuario}! Seja bem-vindo ao seu Roteiro de Estudos.`;
    });

    // Simulação do botão cadastrar
    btnCadastro.addEventListener('click', () => {
        mensagemFeedback.textContent = 'Funcionalidade de cadastro em desenvolvimento!';
        mensagemFeedback.className = 'text-xs text-center font-medium mt-1 text-amber-400';
        mensagemFeedback.classList.remove('hidden');
    });
});

// Funções para os botões do menu lateral
function carregarSubMenu(topico) {
    const titulo = document.getElementById('texto-titulo');
    const conteudo = document.getElementById('texto-conteudo');
    
    if(topico === 1) {
        titulo.textContent = "1. O Credo (Símbolo dos Apóstolos)";
        conteudo.textContent = "O Credo é a profissão de fé cristã. Ele contém as principais verdades em que cremos, divididas em 12 artigos fundamentais sobre Deus Pai, Jesus Cristo, o Espírito Santo e a Santa Igreja.";
    } else if(topico === 7) {
        titulo.textContent = "7. O que é a Igreja?";
        conteudo.textContent = "Segundo o Catecismo Romano, a Igreja é a sociedade dos fiéis batizados, unidos pela mesma fé, sob a autoridade do Romano Pontífice e dos Bispos em comunhão com ele.";
    } else {
        titulo.textContent = `Tópico ${topico}`;
        conteudo.textContent = "Conteúdo em fase de estudos e alimentação do banco de dados.";
    }
}

function mostrarConsideracoes() {
    alert("Sistema de Estudos Católicos v1.0 - Desenvolvido em Flask e Tailwind.");
}
