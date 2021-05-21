const modalElement = document.getElementById('modal');
const inputs = document.querySelectorAll('input')

// Open Modal
document.getElementById('add-new').addEventListener('click', modal.open)

// Close Modal
modalElement.querySelector('#modal-close').addEventListener('click', modal.close)
modalElement.querySelector('#modal-mask').addEventListener('click', modal.close)

// Form submit
document.getElementById('form').addEventListener('submit', function(event) {
    event.preventDefault()

    let data = {}
    let inputIndex = null

    inputs.forEach(function(input) {
        data[input.name] = input.value
        if (input.name === 'index' && input.value) {
            inputIndex = input.value
        }
    })

    functions.loading('load')
    
    setTimeout(() => {
        if (inputIndex) {
            users.update(data)
        } else {
            users.add(data)
        }

        modal.close()

        inputs.forEach(function(input) {
            input.value = ''
            input.focus()
        })

        functions.loading('Cadastrar')
    }, 1500)
    
})

users.load()

functions.activeButtons()