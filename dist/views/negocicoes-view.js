import { View } from "./view.js";
export default class NegociacoesView extends View {
    template(model) {
        return `
            <table class='table table-hover table-bordered'
                <thead>
                    <tr>
                        <th>DATA</th>
                        <th>QUANTIDADE</th>
                        <th>VALOR</th>
                    </tr>
                </thead>
                <tbody>${model.lista().map(({ quantidade, valor, data }) => {
            return `
                        <tr>
                            <td>${this.formatar(data)}</td>
                            <td>${quantidade}</td>
                            <td>${valor}</td>
                        </tr>
                    `;
        }).join('')}
                </tbody>
            </table>
        `;
    }
    formatar(data) {
        return new Intl.DateTimeFormat().format(data);
    }
}
//# sourceMappingURL=negocicoes-view.js.map