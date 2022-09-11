export default class Negociacao {

  constructor(
    private _data: Date, 
    public readonly quantidade: number, 
    public readonly valor: number
  ){}

    get data(): Date {
      const data = new Date(this._data.getTime())
      return this._data
    }

  get volume(): number{
    return this.quantidade * this.valor
  }

  static criaDe(dataString: string, quantidadeString: string, valorString: string){
    const exp = /-/g
    const date = new Date(dataString.replace(exp, ','));
    const quantidade = parseInt(quantidadeString);
    const valor = parseInt(valorString);
    return new Negociacao(date, quantidade, valor);
  }
}
