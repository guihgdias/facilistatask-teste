let idUpdateTask = document.getElementById('updateTaskModal').querySelector('.idTask')
let saveUpdateTask = document.getElementById('updateTaskModal').querySelector('.editTask')
saveUpdateTask.disabled = true;
saveUpdateTask.classList.add('-disable')
let inputNameUpdatedTask = document.getElementById('updateTaskModal').querySelector('#nameUpdateTask')
let inputDescriptionUpdatedTask = document.getElementById('updateTaskModal').querySelector('#descriptionUpdateTask')

function openCloseUpdateModal() {
    let updateTaskModal = document.getElementById('updateTaskModal')
    if(updateTaskModal.classList.contains('-hidden') == true) {
        updateTaskModal.classList.remove('-hidden')
        let BodyHTML = document.querySelector('body').style = 'overflow: hidden'
    } else {
        updateTaskModal.classList.add('-hidden')
        BodyHTML = document.querySelector('body').style = 'overflow: auto'
    }
}

function updateTask(idTask) {
    openCloseUpdateModal()
    getValueInputsFromTask(idTask)
    idUpdateTask.value = idTask
    let idTaskUpdate = idUpdateTask.value
}

function getValueInputsFromTask(id) {
    let task = document.getElementById(''+id+'')
    inputNameUpdatedTask.value = task.querySelector('#taskName').innerHTML
    inputDescriptionUpdatedTask.value = task.querySelector('.taskDescription').innerHTML
}

let closeUpdateModal = document.getElementById('updateTaskModal').querySelector('.closeModal')

closeUpdateModal.addEventListener('click', () => {
    openCloseUpdateModal();
    inputNameUpdatedTask.value = ''
    inputDescriptionUpdatedTask.value = ''
    saveUpdateTask.disabled = true;
    saveUpdateTask.classList.add('-disable')
})

saveUpdateTask.addEventListener('click', () => {
    let taskUpdated = idUpdateTask.value
    let taskToUpdate = document.getElementById(''+taskUpdated+'');
    let valueNameToUpdate = taskToUpdate.querySelector('.taskName')
    let valueDescriptionToUpdate = taskToUpdate.querySelector('.taskDescription')
    valueNameToUpdate.innerHTML = inputNameUpdatedTask.value;
    valueDescriptionToUpdate.innerHTML = inputDescriptionUpdatedTask.value;
    openCloseUpdateModal();
})

function checkUpdateIputs() {
    let contentUpdateNameInput = inputNameUpdatedTask.value;
    let contentUpdateDescriptionInput = inputDescriptionUpdatedTask.value;
      if (contentUpdateNameInput !== null && contentUpdateNameInput !== '' && contentUpdateDescriptionInput !== null && contentUpdateDescriptionInput !== '') {
        saveUpdateTask.disabled = false;
        saveUpdateTask.classList.remove('-disable');
      } else {
        saveUpdateTask.disabled = true;
        saveUpdateTask.classList.add('-disable');
      }
}

inputNameUpdatedTask.addEventListener("input", (e) => {
    checkUpdateIputs()
});

inputDescriptionUpdatedTask.addEventListener("input", (e) => {
    checkUpdateIputs()
});