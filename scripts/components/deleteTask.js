const closeModalRemoveTask = () => {
    document.getElementById('deleteTaskModal').classList.add('-hidden')
}

document.getElementById('deleteTaskModal').querySelector('.cancelDeleteTask').addEventListener('click', closeModalRemoveTask)

const removeTask = () => {
    let removeModal = document.getElementById('deleteTaskModal')
    let idTaskModal = removeModal.querySelector('.idTask').value
    
    let databaseTasks = getTask()
    databaseTasks.splice(idTaskModal, 1)
    setTask(databaseTasks)
    renderTasks()
    closeModalRemoveTask()
}

document.getElementById('deleteTaskModal').querySelector('.confirmDeleteTask').addEventListener('click', removeTask)