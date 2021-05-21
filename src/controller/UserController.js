class UserController {
    
    constructor() {
        let $ = document.querySelector.bind(document)
        this.listUsers = new UsersList()

        this.listView = new UsersView($('#list-view'));
        this.listView.update(this.listUsers);
    }
    
    load() {
        let users = StorageHelper.get()
        if (users?.length > 0) {
            this.setUsers(users)
        } else {
            users = StorageHelper.list()
            users.then(user => {
                this.setUsers(user)
            })
        }
    }

    setUsers(users) {
        users.forEach(user => {
            this.listUsers.create(
                new User(
                    user.name,
                    user.cpf,
                    user.phone,
                    user.email
                )
            );
        });
        StorageHelper.set(users)
        this.listView.update(this.listUsers);
    }

    add(data) {
        this.listUsers.create(new User(data.name, data.cpf, data.phone, data.email));
        this.listView.update(this.listUsers);

        let users = this.listUsers.users.map(user => ({name: user.name, cpf: user.cpf, phone: user.phone, email: user.email}))
        StorageHelper.set(users)
        functions.activeButtons()
    }

    edit(index) {
        modal.open('edit')

        let user = this.listUsers.users.filter((x , i) => index === i)[0]
        modal.setInputValues(index, user)
    }

    update(data) {
        this.listUsers.edit(data, data.index)
        let users = this.listUsers.users.map(user => {
            return {name: user.name, cpf: user.cpf, phone: user.phone, email: user.email}
        })
        StorageHelper.set(users)
        this.listView.update(this.listUsers)
        functions.activeButtons()
    }

    delete(index) {
        this.listUsers.delete(index);
        let users = this.listUsers.users.map(({name, cpf, phone, email}) => ({
            name,
            cpf,
            phone,
            email
        }))
        StorageHelper.set(users)
        this.listView.update(this.listUsers);
        functions.activeButtons()
    }
}

let users = new UserController()