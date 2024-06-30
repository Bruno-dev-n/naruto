document.addEventListener('DOMContentLoaded', function() {
    const buttons = document.querySelectorAll('[data-tab-button]');

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function(button) {
            const tabs = button.target.dataset.tabButton;
            console.log(`Botão clicado: ${tabs}`); // Log para verificar qual botão foi clicado
            const tab = document.querySelector(`[data-tab-id=${tabs}]`);
            nonetabs();
            tab.classList.add('mostrar');
            removeButtonActive();
            button.target.classList.add('esconder');
        });
    }
});

function removeButtonActive() {
    const buttons = document.querySelectorAll('[data-tab-button]');
    for (let i = 0; i < buttons.length; i++) {
        buttons[i].classList.remove('esconder');
    }
}

function nonetabs() {
    const containertabs = document.querySelectorAll('[data-tab-id]');
    for (let i = 0; i < containertabs.length; i++) {
        containertabs[i].classList.remove('mostrar');
    }
}
