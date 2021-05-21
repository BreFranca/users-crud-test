class ModalController {

    open(type) {
        document.querySelector('#modal').classList.add('open');
        document.querySelector('#modal .title').innerHTML = 'Adicionar um novo usuário'
        functions.loading('Cadastrar')
        document.querySelector('input[name="index"]').value = ''
        if(type == 'edit') {
            document.querySelector('#modal').classList.add('edit');
            document.querySelector('#modal .title').innerHTML = 'Editar usuário'
            functions.loading('Editar')
        }
    }

    close() {
        document.querySelector('#modal').classList.remove('open');
        document.querySelector('#modal').classList.remove('edit');
    }

    setInputValues(index, user) {
        Object.keys(user).map(name => {
            document.querySelector(`input[name=${name}]`).value = user[name]
            document.querySelector(`input[name=${name}]`).focus()
            document.querySelector(`input[name=${name}]`).parentNode.querySelector('.floating-label').classList.add('floating-label-active')
        })
        document.querySelector('input[name="index"]').value = index.toString() ? index : ''
    }
}

let modal = new ModalController();