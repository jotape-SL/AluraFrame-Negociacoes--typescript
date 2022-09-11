import negociacaoController from "./controllers/negociacao-controller.js";
const controller = new negociacaoController();
const form = document.querySelector('.form');
if (form) {
    form.addEventListener('submit', e => {
        e.preventDefault();
        controller.adiciona();
    });
}
else {
    throw Error("Não foi possível inicizliar a aplicação. Veriqfique se o 'form' existe");
}
