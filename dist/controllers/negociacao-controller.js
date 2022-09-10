import { DiasDaSemana } from "../enums/dias-da-semana.js";
import Negociacao from "../models/negociacao.js";
import Negociacoes from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import NegociacoesView from "../views/negocicoes-view.js";
export default class negociacaoController {
    constructor() {
        this.negociacoes = new Negociacoes();
        this.negociacoesView = new NegociacoesView('#negociacoesView');
        this.mensagemView = new MensagemView('#mensagemView');
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }
    isDiaUtil(data) {
        return data.getDay() < DiasDaSemana.SABADO && data.getDay() > DiasDaSemana.DOMINGO;
    }
    adiciona() {
        const negociacao = this.criaNegociacao();
        if (this.isDiaUtil(negociacao.data)) {
            this.mensagemView.update('Negociações só podem ser feitas em dias úteis. ');
            return;
        }
        this.negociacoes.adiciona(negociacao);
        this.limpaForm();
        this.atualizaView();
    }
    criaNegociacao() {
        const exp = /-/g;
        const date = new Date(this.inputData.value.replace(exp, ','));
        const quantidade = parseInt(this.inputQuantidade.value);
        const valor = parseInt(this.inputValor.value);
        return new Negociacao(date, quantidade, valor);
    }
    limpaForm() {
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }
    atualizaView() {
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!');
    }
}
