import Negociacao from "./negociacao";

export default class Negociacoes {
    private negociacoes: Negociacao[] =[]

    adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao)
    }

    lista(): readonly Negociacao[]{
        return this.negociacoes
    }
}