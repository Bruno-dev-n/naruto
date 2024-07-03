const botao1 = document.getElementById('classic');
botao1.addEventListener('click', alterarTextoBotao1);

const botao2 = document.getElementById('shipuden');
botao2.addEventListener('click', alterarTextoBotao2);

function alterarTextoBotao1() {
    const proximaUl = botao1.nextElementSibling;
    alterarTextoDoBotao(proximaUl, botao1);
}

function alterarTextoBotao2() {
    const proximaUl = botao2.nextElementSibling;
    alterarTextoDoBotao(proximaUl, botao2);
}

function alterarTextoDoBotao(ulElement, botao) {
    if (ulElement && ulElement.tagName === 'UL') {
        ulElement.classList.toggle('esconder');
        botao.textContent = ulElement.classList.contains('esconder') ? 'Ver mais' : 'Ver menos';
    } else {
        console.log('Não há próxima UL.');
    }
}
