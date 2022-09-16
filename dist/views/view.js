export class View {
    constructor(selector) {
        const element = document.querySelector(selector);
        if (element) {
            this.element = element;
        }
        else {
            throw Error(`Seletor ${selector} não exite no DOM.`);
        }
    }
    update(model) {
        let template = this.template(model);
        this.element.innerHTML = this.template(model);
        this.element.innerHTML = template;
    }
}
//# sourceMappingURL=view.js.map