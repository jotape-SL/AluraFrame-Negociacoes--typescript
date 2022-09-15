import negociacaoController from "./controllers/negociacao-controller.js";
import NegociacoesView from "./views/negocicoes-view.js";

const controller = new negociacaoController();
const form = document.querySelector('.form')
if(form){
  form.addEventListener('submit', e =>{
    e.preventDefault();
    controller.adiciona();
  } );
}else{
  throw Error("Não foi possível inicizliar a aplicação. Veriqfique se o 'form' existe");
}

const botaoImporta = document.querySelector('#botao-importa')
if(botaoImporta){
  botaoImporta.addEventListener('click', ()=>{
    controller.importarDados();
  })
}else{
  throw Error ('Botão importa não foi encontrado')
}
