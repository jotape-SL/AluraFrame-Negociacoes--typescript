import Negociacoes from "../models/negociacoes.js";
import { View } from "./view.js";

export default class NegociacoesView extends View<Negociacoes>{
    protected template(model:Negociacoes): string{
        return `
            <table class='table table-hover table-bordered'
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>${model.lista().map(({quantidade, valor,data})=>{
                    return `
                        <tr>
                            <td>${this.formatar(data)}</td>
                            <td>${quantidade}</td>
                            <td>${valor}</td>
                        </tr>
                    `
                }).join('')}
                </tbody>
            </table>
        `
    }

    private formatar(data: Date):string{
        return new Intl.DateTimeFormat().format(data)
    }
}
