class UsersView {

    constructor(element) {
        this.newElement = element;
    }

    update(model) {
        this.newElement.innerHTML = this.template(model);
    }
    
    template(model) {
        return `
            <tbody>
                ${model.users.map((n, index) => `
                    <tr>
                        <td><span>Nome: </span>${n.name}</td>
                        <td><span>CPF: </span>${n.cpf}</td>
                        <td><span>Telefone: </span>${n.phone}</td>
                        <td><span>E-mail: </span>${n.email}</td>
                        <td>
                            <div class="action-btns button-group">
                                <button class="btn btn-circle btn-edit">
                                    <i class="far fa-edit"></i>
                                </button>
                                <button class="btn btn-circle btn-erase btn-delete">
                                    <i class="fas fa-trash-alt"></i>
                                </button>
                            </div>
                        </td>
                    </tr>
                `).join('')}                
            </tbody>
        `;
    }
}