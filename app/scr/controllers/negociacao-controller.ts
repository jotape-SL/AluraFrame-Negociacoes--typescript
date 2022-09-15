import { domInjector } from "../decorators/DOM-injector.js";
import { inspect } from "../decorators/inspect.js";
import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";
import { DiasDaSemana } from "../enums/dias-da-semana.js";
import Negociacao from "../models/negociacao.js";
import Negociacoes from "../models/negociacoes.js";
import { NegociacoesService } from "../sevices/negociacoes-service.js";
import { MensagemView } from "../views/mensagem-view.js";
import NegociacoesView from "../views/negocicoes-view.js";

export default class negociacaoController{
    @domInjector('#data')
    private inputData: HTMLInputElement;
    @domInjector('#quantidade')
    private inputQuantidade: HTMLInputElement;
    @domInjector('#valor')
    private inputValor: HTMLInputElement;
    private negociacoes = new Negociacoes();
    private negociacoesView = new NegociacoesView('#negociacoesView');
    private mensagemView = new MensagemView('#mensagemView');
    private negociacoesService = new NegociacoesService();  

    constructor(){
        this.negociacoesView.update(this.negociacoes);
    }   

    
    @logarTempoExecucao()
    @inspect
    adiciona(): void{
        const negociacao = Negociacao.criaDe(
            this.inputData.value,
            this.inputQuantidade.value,
            this.inputValor.value,
            );
        
            if(!this.isDiaUtil(negociacao.data) ){
                this.mensagemView.update('Negociações só podem ser feitas em dias úteis. ')
                return
            }
            this.negociacoes.adiciona(negociacao);
            this.limpaForm();
            this.atualizaView();
        }
    importarDados():void{
        this.negociacoesService
            .obterNegociacoesDoDia()
            .then(negociacoesDeHoje =>{
                for(let negociacao of negociacoesDeHoje){
                    this.negociacoes.adiciona(negociacao);
                }
                this.negociacoesView.update(this.negociacoes )
            })
    }
    private isDiaUtil(data:Date):boolean{
        return data.getDay() < DiasDaSemana.SABADO && data.getDay() > DiasDaSemana.DOMINGO
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
