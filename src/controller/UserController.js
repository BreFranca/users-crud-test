class UserController {
    load() {
        let users = StorageHelper.get()
        console.log(users)
    }
}

let users = new UserController()