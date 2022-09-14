import { logarTempoExecucao } from "../decorators/logar-tempo-execucao.js";

export abstract class View<T> {
    protected element : HTMLElement

    // paramentos opcionais nao podem ser atrbuidos nos primeiros paramentros sendo necessario colocar-los por ultimo
    constructor(selector:string){
        const element  = document.querySelector(selector);
        if (element){
            
            this.element = element as HTMLElement
        }else{
            throw Error (`Seletor ${selector} não exite no DOM.`)
        }
    }
    @logarTempoExecucao(true)
    update(model:T):void{
        let template = this.template(model)
        this.element.innerHTML = this.template(model); 
        this.element.innerHTML = template
    }

    protected abstract template(model:T): string;
}