import Negociacao from "./negociacao";

export default class Negociacoes {
    private negociacoes:Array<Negociacao> = []

    adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao)
    }

    lista(): ReadonlyArray<Negociacao>{
        return this.negociacoes
    }
}