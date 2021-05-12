class User {
    constructor(name, cpf, phone, email) {
        this.name = name
        this.cpf = cpf
        this.phone = phone
        this.email = email
    }

    get name() {
        return this.name
    }
    
    get cpf() {
        return this.cpf
    }
    
    get phone() {
        return this.phone
    }

    get email() {
        return this.email
    }

    set edit(data) {
        this.name = data.name
        this.cpf = data.cpf
        this.phone = data.phone
        this.email = data.email
    }
}