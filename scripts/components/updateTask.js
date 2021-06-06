const closeModalEditTask = () => {
    document.getElementById('updateTaskModal').classList.add('-hidden')
    document.getElementById('nameUpdateTask').value = ''
    document.getElementById('descriptionUpdateTask').value = ''
}

document.getElementById('updateTaskModal').querySelector('.closeModal').addEventListener('click', closeModalEditTask)

const saveEditTask = () => {
    let editModal = document.getElementById('updateTaskModal')
    let idTaskModal = editModal.querySelector('.idTask').value

    let newTitleTask = editModal.querySelector('#nameUpdateTask').value
    let newDescriptionTask = editModal.querySelector('#descriptionUpdateTask').value

    let databaseTasks = getTask()
    databaseTasks[idTaskModal].taskName = newTitleTask
    databaseTasks[idTaskModal].taskDescription = newDescriptionTask
    setTask(databaseTasks)
    renderTasks()
    closeModalEditTask()
}


document.getElementById('updateTaskModal').querySelector('.editTask').addEventListener('click', saveEditTask)