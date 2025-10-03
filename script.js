document.addEventListener('DOMContentLoaded', function(){
    const botaoDeAcessibilidade = document.getElementById('botao-acessibilidade');
    const opcoesDeAcessibilidade = document.getElementById('opcoes-acessibilidade');
    const aumentaFonteBotao = document.getElementById('aumentar-fonte');
    const diminuiFonteBotao = document.getElementById('diminuir-fonte');
    const alternaContraste = document.getElementById('alterna-contraste');
 
    // Define os limites para o tamanho da fonte.
    const fonteMinima = 0.8;
    const fonteMaxima = 1.6;
    const incremento = 0.1;

    // Acessa o tamanho da fonte do localStorage ou usa o valor padrão.
    let tamanhoAtualFonte = parseFloat(localStorage.getItem('tamanho-fonte')) || 1;
    document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
 
    // Evento de clique para o botão principal de acessibilidade.
    botaoDeAcessibilidade.addEventListener('click', function (){
        botaoDeAcessibilidade.classList.toggle('rotacao-botao');
        opcoesDeAcessibilidade.classList.toggle('apresenta-lista');
 
        const botaoSelecionado = botaoDeAcessibilidade.getAttribute('aria-expanded') === 'true';
        botaoDeAcessibilidade.setAttribute('aria-expanded', !botaoSelecionado);
    });
 
    // Evento para aumentar a fonte.
    aumentaFonteBotao.addEventListener('click', function(){
        if (tamanhoAtualFonte < fonteMaxima) {
            tamanhoAtualFonte += incremento;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
            localStorage.setItem('tamanho-fonte', tamanhoAtualFonte);
        }
    });
 
    // Evento para diminuir a fonte.
    diminuiFonteBotao.addEventListener('click', function(){
        if (tamanhoAtualFonte > fonteMinima) {
            tamanhoAtualFonte -= incremento;
            document.body.style.fontSize = `${tamanhoAtualFonte}rem`;
            localStorage.setItem('tamanho-fonte', tamanhoAtualFonte);
        }
    });
 
    // Evento para alternar o alto contraste.
    alternaContraste.addEventListener('click', function(){
        document.body.classList.toggle('alto-contraste');
    });
});
