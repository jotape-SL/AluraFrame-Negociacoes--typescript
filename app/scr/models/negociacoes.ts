import { Imprimivel } from "../utils/imprimivel";
import Negociacao from "./negociacao";

export default class Negociacoes implements Imprimivel{
    private negociacoes: Negociacao[] =[]

    adiciona(negociacao:Negociacao){
        this.negociacoes.push(negociacao)
    }

    lista(): readonly Negociacao[]{
        return this.negociacoes
    }

    paraTexto():string{
        return JSON.stringify(this.negociacoes, null, 2)
    }
}