var idTaskInfo = document.getElementById('deleteTaskModal').querySelector('.idTask')

function openCloseModal() {
    let deleteTaskModal = document.getElementById('deleteTaskModal')
    if(deleteTaskModal.classList.contains('-hidden') == true) {
        deleteTaskModal.classList.remove('-hidden')
    } else {
        deleteTaskModal.classList.add('-hidden')
    }
}

function deleteTask(idTask) {
    openCloseModal()
    idTaskInfo.value = idTask
    let idTaskToDelete = idTaskInfo.value
}

let cancelDelete = document.getElementById('deleteTaskModal').querySelector('.cancelDeleteTask')
let confirmDelete = document.getElementById('deleteTaskModal').querySelector('.confirmDeleteTask')

cancelDelete.addEventListener('click', () => {
    openCloseModal() 
})

confirmDelete.addEventListener('click', () => {
    let taskDeleted = idTaskInfo.value
    
    let thisTaskDeleted = document.getElementById(''+taskDeleted+'')
    if(thisTaskDeleted) {
        taskListArea.removeChild(thisTaskDeleted);
        openCloseModal()
    }
})