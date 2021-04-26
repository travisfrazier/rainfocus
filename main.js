//Global Variables
const checkbox = document.querySelector('#main-checkbox');
const modalEditTrigger = document.querySelector('#modal-edit-open');
const modalEditClose = document.querySelector('#modal-edit-close');
const modalDeleteTrigger = document.querySelector('#modal-delete-open');
const modalDeleteClose = document.querySelector('#modal-delete-close');
const modalEdit = document.querySelector('#modal-edit');
const modalDelete = document.querySelector('#modal-delete');
const emptyFormTrigger = document.querySelector('#modal-delete-yes');


//CheckBox Functionality
checkbox.addEventListener('change', function () {

  const checkboxes = document.querySelectorAll('.c-checkbox');

  if (checkbox.checked) {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = true;
    }
  } else {
    for (let i = 0; i < checkboxes.length; i++) {
      checkboxes[i].checked = false;
    }
  }

});

//Modal Edit Open
modalEditTrigger.addEventListener('click', function() {
  modalEdit.style.display = 'block';
})
//Modal edit Close
modalEditClose.addEventListener('click', function() {
  modalEdit.style.display = 'none';
})

//Modal Delete Open 
modalDeleteTrigger.addEventListener('click', function() {
  modalDelete.style.display = 'block';
})

//Modal edit Close
modalDeleteClose.addEventListener('click', closeDeleteModal);

function closeDeleteModal() {
  modalDelete.style.display = 'none';
}

//Clear input fields 
emptyFormTrigger.addEventListener('click', function() {
  const formInputs = document.querySelectorAll('.c-form__input');

  for (let i = 0; i < formInputs.length; i++) {
    formInputs[i].value = "";
  }

  closeDeleteModal();

});