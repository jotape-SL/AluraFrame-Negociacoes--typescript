import negociacaoController from "./controllers/negociacao-controller.js";
import NegociacoesView from "./views/negocicoes-view.js";

const controller = new negociacaoController();
const form = document.querySelector('.form')
form.addEventListener('submit', e =>{
  e.preventDefault();
  controller.adiciona();
} );

const negociacoesView = new NegociacoesView
const template = negociacoesView.template();
console.log(template);
