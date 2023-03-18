/*
    OBJETIVO - quando clicarmos no botão temos que mostrar a imagem de fundo correspondente

    - Passo 1 - dar um jeito de pegar o elemento HTML dos botões

    - Passo 2 - dar um jeito de identificar o clique do usuário no botão

    - Passo 3 - desmarcar o botão selecionado anterior

    - Passo 4 - marcar o botão clicado como se estivesse selecionado

    - Passo 5 - esconder a imagem de fundo anterior

    - Passo 6 - fazer aparecer a imagem de fundo correspondente ao botão clicado
*/

// Passo 1 - dar um jeito de pegar o elemento HTML dos botões
const botoesCarrossel = document.querySelectorAll('.botao');
const imagens = document.querySelectorAll('.imagem');

// Passo 2 - dar um jeito de identificar o clique do usuário no botão
botoesCarrossel.forEach((botao, indice) => {
    botao.addEventListener('click', () => {
        desativarBotaoSelecionado();

        selecionarBotaoCarrossel(botao);

        esconderImagemAtiva();

        mostrarImagemDeFundo(indice);
    })
})

function mostrarImagemDeFundo(indice) {
    imagens[indice].classList.add('ativa');
}

function selecionarBotaoCarrossel(botao) {
    botao.classList.add('selecionado');
}

function esconderImagemAtiva() {
    const imagemAtiva = document.querySelector('.ativa');
    imagemAtiva.classList.remove('ativa');
}

function desativarBotaoSelecionado() {
    const botaoSelecionado = document.querySelector('.selecionado');
    botaoSelecionado.classList.remove('selecionado');
}
