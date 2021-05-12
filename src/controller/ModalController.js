class ModalController {
    open(type) {
        document.querySelector('#modal').classList.add('open');
    }

    close() {
        document.querySelector('#modal').classList.remove('open');
        document.querySelector('#modal').classList.remove('edit');
    }
}

let modal = new ModalController();