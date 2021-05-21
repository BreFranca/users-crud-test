class Functions {
    activeButtons () {
        var btns = document.getElementsByClassName('action-btns')
        for (let index = 0; index < btns.length; index++) {
            const element = btns[index];
            element.querySelector('.btn-edit').addEventListener('click', function() {
                users.edit(index)
            })
            element.querySelector('.btn-delete').addEventListener('click', function() {
                users.delete(index)
            })
        }
    }

    loading (txt) {
        if(txt == 'load') {
            document.querySelector('#btn-submit').innerHTML = '<span class="icon-load"></span>'
            document.querySelector('#btn-submit').setAttribute('disabled', true)
        } else {
            document.querySelector('#btn-submit').innerHTML = txt
            document.querySelector('#btn-submit').removeAttribute('disabled', true)
        }
    }
}

const functions = new Functions()