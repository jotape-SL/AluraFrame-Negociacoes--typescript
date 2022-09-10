import Negociacoes from "../models/negociacoes.js";
import { View } from "./view.js";

export default class NegociacoesView extends View{
    template(model:Negociacoes): string{
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
                            <td>${new Intl.DateTimeFormat().format(data)}</td>
                            <td>${quantidade}</td>
                            <td>${valor}</td>
                        </tr>
                    `
                }).join('')}
                </tbody>
            </table>
        `
    }

    update(model:Negociacoes):void{
        const template = this.template(model)
        this.element.innerHTML = this.template(model); 
    }
}
