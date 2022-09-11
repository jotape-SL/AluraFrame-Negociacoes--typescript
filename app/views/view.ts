export abstract class View<T> {
    protected element : HTMLElement
    private escapar = false

    // paramentos opcionais nao podem ser atrbuidos nos primeiros paramentros sendo necessario colocar-los por ultimo
    constructor(selector:string, escapar?:boolean){
        const element  = document.querySelector(selector);
        if (element){
            
            this.element = element as HTMLElement
        }else{
            throw Error (`Seletor ${selector} não exite no DOM.`)
        }
        if(escapar){
            this.escapar = escapar
        }
    }

    update(model:T):void{
        let template = this.template(model)
        this.element.innerHTML = this.template(model); 
        if(this.escapar){
            template = template.replace(/<script>[\s\S]*?<\/script>/,'')
        }
        this.element.innerHTML = template
    }

    protected abstract template(model:T): string;
}