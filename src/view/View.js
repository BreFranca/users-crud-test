class View {
    
    constructor(element) {
        this.newElement = element;
    }
    
    template() {
        throw new Error('O método template deve ser implementado');
    }
    
    update(model) {
        this.newElement.innerHTML = this.template(model);
    }
}