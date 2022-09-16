import { Imprimivel } from "../utils/imprimivel";

export default class Negociacao implements Imprimivel{
  constructor(
    private _data: Date,
    public readonly quantidade: number,
    public readonly valor: number
  ) {}

  get data(): Date {
    const data = new Date(this._data.getTime());
    return this._data;
  }

  get volume(): number {
    return this.quantidade * this.valor;
  }

  static criaDe(
    dataString: string,
    quantidadeString: string,
    valorString: string
  ) {
    const exp = /-/g;
    const date = new Date(dataString.replace(exp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseInt(valorString);
    return new Negociacao(date, quantidade, valor);
  }

  paraTexto(): string {
    return `
        Data:${this.data}
        Quantidade:${this.quantidade}
        Valor:${this.valor}
    `;
  }

  isEqual(negociacao:Negociacao):boolean{
    return this.data.getDate() === negociacao.data.getDate() && 
    this.data.getMonth() === negociacao.data.getMonth() &&
    this.data.getFullYear() === negociacao.data.getFullYear()
  }
}
