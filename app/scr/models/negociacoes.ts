import { Comparavel } from "../interfaces/comparavel.js";
import { Imprimivel } from "../utils/imprimivel";
import Negociacao from "./negociacao";

export default class Negociacoes implements Imprimivel, Comparavel<Negociacoes>{
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
    isEqual(negociacoes: Negociacoes): boolean {
        throw JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}