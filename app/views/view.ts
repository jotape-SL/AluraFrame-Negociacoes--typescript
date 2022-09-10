export class View<T> {
    protected element : HTMLElement

    constructor(selector:string){
        this.element = document.querySelector(selector);
    }

    update(model:T):void{
        const template = this.template(model)
        this.element.innerHTML = this.template(model); 
    }

    template(model:T): string{
        throw Error('Classe filha preisa implementar o método template')
    }

}