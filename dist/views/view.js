export class View {
    constructor(selector) {
        this.element = document.querySelector(selector);
    }
    update(model) {
        const template = this.template(model);
        this.element.innerHTML = this.template(model);
    }
    template(model) {
        throw Error('Classe filha preisa implementar o método template');
    }
}
