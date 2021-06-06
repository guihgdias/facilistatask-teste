const getTask = () => JSON.parse(localStorage.getItem('taskList')) ?? []
const setTask = (database) => localStorage.setItem('taskList', JSON.stringify(database))

document.getElementById('newTaskButton').addEventListener('click', () => {
    document.getElementById('addTaskModal').classList.remove('-hidden')
})

document.getElementById('addTaskModal').querySelector('.addNewTask').addEventListener('click', () => {
    let taskPriority = 0
    let isUrgent = document.getElementById('urgent')
    let isImportant = document.getElementById('important')
    let taskName = document.getElementById('nameNewTask')
    let taskDescription = document.getElementById('descriptionNewTask')
    let taskStatus = ''

    if(isUrgent.checked == true) {
        taskPriority = 1
    } else if(isImportant.checked == true) {
        taskPriority = 2
    } else {
        taskPriority = 0
    }

    let databaseTasks = getTask()
    databaseTasks.push({
        taskName: taskName.value, 
        taskDescription: taskDescription.value,
        taskPriority: taskPriority,
        taskStatus: taskStatus
    })
    
    setTask(databaseTasks)

    document.getElementById('nameNewTask').value = ''
    document.getElementById('descriptionNewTask').value = ''
    isUrgent.checked = false
    isImportant.checked = false

    renderTasks()
    closeModalAddTask()

    let buttonAddTask = document.querySelector('.addNewTask')
    let buttonEditTask = document.querySelector('.editTask')

    buttonAddTask.disabled = true;
    buttonAddTask.classList.add('-disable');
})

const closeModalAddTask = () => {
    document.getElementById('addTaskModal').classList.add('-hidden')
    document.getElementById('nameNewTask').value = ''
    document.getElementById('descriptionNewTask').value = ''
    let isUrgent = document.getElementById('urgent')
    let isImportant = document.getElementById('important')
    isUrgent.checked = false
    isImportant.checked = false
}

document.getElementById('addTaskModal').querySelector('.closeModal').addEventListener('click', closeModalAddTask)

const createTask = (taskTitle, taskDescription, taskPriority, index, status) => {
    let item = document.createElement('div')
    item.classList.add('main-task')
    item.dataset.id = index

    let isUrgent = ''
    let isImportant = ''

    switch(taskPriority) {
        case 1:
            isUrgent = '-show';
            break;
        case 2:
            isImportant = '-show';
            break;
    }

    item.innerHTML = `
    <div class="wrapper">
    <div class="wrapper">
        <input class="input-checkbox" type="checkbox" data-key=${index}>
        <span class="taskName" id="taskName" data-key=${index}>${taskTitle}</span>
    </div>
    <div class="wrapper">
        <div class="wrapper">
            <span class="alert ${isImportant}">Importante</span>
            <span class="alert -warning ${isUrgent}">Urgente</span>
        </div>
        <div class="actions">
            <img src="../../assets/images/icons/dots.png" class="openActions" data-key=${index}>
            <div class="options" id="taskOptions">
                <span class="option editOption" data-key=${index}>Editar</span>
                <span class="option removeOption" data-key=${index}>Excluir</span>
                <img class="icon closeActions" src="../../assets/images/icons/dots-active.png" data-key=${index}>
            </div>
        </div>
    </div>
    </div>
    <div class="descriptionArea">
        <p class="taskDescription">${taskDescription}</p>
    </div>
    `

    document.getElementById('taskList').appendChild(item)
}
 
const clearTasks = () => {
    const taskList = document.getElementById('taskList')
    while(taskList.firstChild) {
        taskList.removeChild(taskList.lastChild)
    }
}

const renderTasks = () => {
    clearTasks()
    let databaseTasks = getTask();
    databaseTasks.forEach((item, index) => createTask(item.taskName, item.taskDescription, item.taskPriority, index, item.status))

    for(i = 0; i < databaseTasks.length; i++) {
        let mainElement = document.querySelector(`[data-id='${i}']`)
        if(databaseTasks[i].taskStatus == 'checked') {
            mainElement.classList.add('-finished')
            mainElement.querySelector('.input-checkbox').classList.add('-checked')
            mainElement.querySelector('.input-checkbox').checked = true
            mainElement.querySelector('.taskName').classList.add('-finished')
        }
    }

    let tasksCount = databaseTasks.length
    let tasksNumber = document.querySelector('.tasksNumber')
    tasksNumber.innerHTML = tasksCount

    let urgentCount = databaseTasks.filter(urgent => urgent.taskPriority == 1)
    let urgentCountHTML = document.querySelector('.urgentTasks')
    urgentCountHTML.innerHTML = urgentCount.length

    if(urgentCount.length > 0) {
        urgentCountHTML.classList.add('-active')
    } else {
        urgentCountHTML.classList.remove('-active')
    }

    let importantCount = databaseTasks.filter(important => important.taskPriority == 2)
    let importantCountHTML = document.querySelector('.importantTasks')
    importantCountHTML.innerHTML = importantCount.length

    if(importantCount.length > 0) {
        importantCountHTML.classList.add('-active')
    } else {
        importantCountHTML.classList.remove('-active')
    }
}

const clickTask = (e) => {
    let element = e.target
    let index = element.dataset.key
    let mainElement = document.querySelector(`[data-id='${index}']`)

    if(element.classList.contains('taskName') == true) {
        let descriptionTask = mainElement.querySelector('.descriptionArea')
        if(descriptionTask.classList.contains('-open') == false) {
            descriptionTask.classList.add('-open')
        } else {
            descriptionTask.classList.remove('-open')
        }
    }

    if(element.classList.contains('input-checkbox')) {
        let databaseTasks = getTask()
        if(databaseTasks[index].taskStatus == '') {
            mainElement.classList.add('-finished')
            mainElement.querySelector('.input-checkbox').classList.add('-checked')
            mainElement.querySelector('.taskName').classList.add('-finished')
            databaseTasks[index].taskStatus = 'checked'
            setTask(databaseTasks)
            renderTasks()
        } else {
            mainElement.classList.remove('-finished')
            mainElement.querySelector('.input-checkbox').classList.remove('-checked')
            mainElement.querySelector('.taskName').classList.remove('-finished')
            databaseTasks[index].taskStatus = ''
            setTask(databaseTasks)
            renderTasks()
        }
    }

    if(element.classList.contains('openActions') == true) {
        let taskActions = mainElement.querySelector('#taskOptions')
        if(taskActions.classList.contains('-open') == false) {
            taskActions.classList.add('-open')
        }
    }

    if(element.classList.contains('closeActions') == true) {
        let taskActions = mainElement.querySelector('#taskOptions')
        if(taskActions.classList.contains('-open') == true) {
            taskActions.classList.remove('-open')
        }
    }

    if(element.classList.contains('editOption') == true) {
        let editModal = document.getElementById('updateTaskModal')
        let idTaskModal = editModal.querySelector('.idTask')
        idTaskModal.value = index
        let taskActions = mainElement.querySelector('#taskOptions')
        let titleTaskValue = mainElement.querySelector('#taskName').innerHTML
        let descriptionTaskValue = mainElement.querySelector('.taskDescription').innerHTML

        if(editModal.classList.contains('-hidden') == true) {
            editModal.classList.remove('-hidden')
            taskActions.classList.remove('-open')
            editModal.querySelector('#nameUpdateTask').value = titleTaskValue
            editModal.querySelector('#descriptionUpdateTask').value = descriptionTaskValue
        }
    }

    if(element.classList.contains('removeOption') == true) {
        let removeModal = document.getElementById('deleteTaskModal')
        let idTaskModal = removeModal.querySelector('.idTask')
        idTaskModal.value = index
        let taskActions = mainElement.querySelector('#taskOptions')
        
        if(removeModal.classList.contains('-hidden') == true) {
            removeModal.classList.remove('-hidden')
            taskActions.classList.remove('-open')
        }
    }
}

document.getElementById('taskList').addEventListener('click', clickTask)

renderTasks()