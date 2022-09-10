import { DiasDaSemana } from "../enums/dias-da-semana.js";
import Negociacao from "../models/negociacao.js";
import Negociacoes from "../models/negociacoes.js";
import { MensagemView } from "../views/mensagem-view.js";
import NegociacoesView from "../views/negocicoes-view.js";

export default class negociacaoController{
    private inputData: HTMLInputElement;
    private inputQuantidade: HTMLInputElement;
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView')

    constructor(){
        this.inputData = document.querySelector('#data');
        this.inputQuantidade = document.querySelector('#quantidade');
        this.inputValor = document.querySelector('#valor');
        this.negociacoesView.update(this.negociacoes);
    }   

    private isDiaUtil(data:Date):boolean{
        return data.getDay() < DiasDaSemana.SABADO && data.getDay() > DiasDaSemana.DOMINGO
    }

    adiciona(): void{
        const negociacao = this.criaNegociacao();
        
        if( this.isDiaUtil(negociacao.data) ){
            this.mensagemView.update('Negociações só podem ser feitas em dias úteis. ')
            return
        }
        this.negociacoes.adiciona(negociacao);
        this.limpaForm();
        this.atualizaView();
    }

    private criaNegociacao(): Negociacao{
        const exp = /-/g
        const date = new Date(this.inputData.value.replace(exp, ','))
        const quantidade = parseInt(this.inputQuantidade.value)
        const valor = parseInt(this.inputValor.value)
        return new Negociacao(date, quantidade, valor)
    }

    private limpaForm():void{
        this.inputData.value = '';
        this.inputQuantidade.value = '';
        this.inputValor.value = '';
        this.inputData.focus();
    }

    private atualizaView():void{
        this.negociacoesView.update(this.negociacoes);
        this.mensagemView.update('Negociação adicionada com sucesso!')
    }
}
