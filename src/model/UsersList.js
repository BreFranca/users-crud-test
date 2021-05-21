class UsersList {
    constructor() {
        this.users = [];
    }
    
    create(user) {
        this.users.push(user);
    }

    delete(index) {
        this.users.splice(index, 1);
    }

    edit(data, index) {
        this.users[index].name = data.name
        this.users[index].cpf = data.cpf
        this.users[index].phone = data.phone
        this.users[index].email = data.email
    }
    
    get list() {
        return [].concat(this.users);
    }
}