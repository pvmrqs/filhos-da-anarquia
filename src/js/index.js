const personagens = document.querySelectorAll('.personagem')
console.log(personagens);

personagens.forEach((personagem) => {
    personagem.addEventListener('mouseenter', () => {

        if (window.innerWidth < 450) {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        }

        removerSelecaoDoPersonagem();

        personagem.classList.add('selecionado');


        alterarImagemPersonagemSelecionado(personagem);

        //passo 3 - alterar o nome do personagem grande 
        alterarNomePersonagemSelecionado(personagem);

        alterarDescricaoPersonagemSelecionado(personagem);

    })
})

function alterarDescricaoPersonagemSelecionado(personagem) {
    const descricaoPersonagem = document.getElementById('descricao-personagem');
    descricaoPersonagem.innerText = personagem.getAttribute('data-description');
}

function alterarNomePersonagemSelecionado(personagem) {
    const nomePersonagem = document.getElementById('nome-personagem');
    nomePersonagem.innerText = personagem.getAttribute('data-name');
}

function alterarImagemPersonagemSelecionado(personagem) {
    const imagemPersonagemGrande = document.querySelector('.personagem-grande');
    //passo 2 - alterar a imagem do personagem grande
    const idPersonagem = personagem.attributes.id.value;
    imagemPersonagemGrande.src = `./src/imagens/card-${idPersonagem}.png`;
}

function removerSelecaoDoPersonagem() {
    const personagemSelecionado = document.querySelector('.selecionado');
    personagemSelecionado.classList.remove('selecionado');
}