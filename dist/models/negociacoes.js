export default class Negociacoes {
    constructor() {
        this.negociacoes = [];
    }
    adiciona(negociacao) {
        this.negociacoes.push(negociacao);
    }
    lista() {
        return this.negociacoes;
    }
    paraTexto() {
        return JSON.stringify(this.negociacoes, null, 2);
    }
    isEqual(negociacoes) {
        throw JSON.stringify(this.negociacoes) === JSON.stringify(negociacoes.lista());
    }
}
//# sourceMappingURL=negociacoes.js.map