class User {
    constructor(name, cpf, phone, email) {
        this.name = name
        this.cpf = cpf
        this.phone = phone
        this.email = email
    }

    get getName() {
        return this.name
    }
    
    get getCpf() {
        return this.cpf
    }
    
    get getPhone() {
        return this.phone
    }

    get getEmail() {
        return this.email
    }

    set edit(data) {
        this.name = data.name
        this.cpf = data.cpf
        this.phone = data.phone
        this.email = data.email
    }
}