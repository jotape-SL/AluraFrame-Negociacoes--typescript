import { Modelo } from "../interfaces/modelo.js";
import Negociacao from "./negociacao.js";

export default class Negociacoes implements Modelo<Negociacoes>{
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