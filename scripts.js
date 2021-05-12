var modalElement = document.getElementById('modal'),
  modalClose = modalElement.querySelector('#modal-close'),
  modalMask = modalElement.querySelector('#modal-mask');


modalClose.addEventListener('click', modal.close)
modalMask.addEventListener('click', modal.close)

document.getElementById('add-new').addEventListener('click', modal.open)