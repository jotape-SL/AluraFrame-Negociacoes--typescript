export class View {
    // paramentos opcionais nao podem ser atrbuidos nos primeiros paramentros sendo necessario colocar-los por ultimo
    constructor(selector, escapar) {
        this.escapar = false;
        this.element = document.querySelector(selector);
        if (escapar) {
            this.escapar = escapar;
        }
    }
    update(model) {
        let template = this.template(model);
        this.element.innerHTML = this.template(model);
        if (this.escapar) {
            template = template.replace(/<script>[\s\S]*?<\/script>/, '');
        }
        this.element.innerHTML = template;
    }
}
