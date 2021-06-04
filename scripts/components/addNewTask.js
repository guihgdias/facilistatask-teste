var buttonOpenModal = document.querySelector('.addtask-button')
var buttonCloseModal = document.querySelector('.closeModal')
var modalAddTask = document.querySelector('#addTaskModal')
var buttonAddTask = document.querySelector('.addNewTask')
var nameNewTask = document.querySelector('#nameNewTask')
var descriptionNewTask = document.querySelector('#description')
var taskListArea = document.querySelector('#taskList')
var isUrgentTask = document.getElementById('urgent')
var isImportantTask = document.getElementById('important')

buttonOpenModal.addEventListener('click', () => {
    modalAddTask.classList.remove('-hidden');
});

buttonCloseModal.addEventListener('click', () => {
    modalAddTask.classList.add('-hidden');
    nameNewTask.value = ''
    descriptionNewTask.value = ''
    isUrgentTask.checked = false
    isImportantTask.checked = false
});

buttonAddTask.addEventListener('click', () => {
    let task = {
        name: nameNewTask.value,
        description: descriptionNewTask.value,
        id: idGenerator(),
    }

    addNewTask(task);
})

function idGenerator() {
    return Math.floor(Math.random() * 3000)
}

function addNewTask(task) {
    let createTask = createTaskHtml(task)
    taskListArea.appendChild(createTask)
    nameNewTask.value = ''
    descriptionNewTask.value = ''
    isUrgentTask.checked = false
    isImportantTask.checked = false
}

function createTaskHtml(task) {
    let isUrgentTask = document.getElementById('urgent')
    let isImportantTask = document.getElementById('important')

    let mainTaskHTML = document.createElement('div')
    mainTaskHTML.id = task.id
    mainTaskHTML.classList.add('main-task')

    let wrapperTaskHTML = document.createElement('div')
    wrapperTaskHTML.classList.add('wrapper', '-noPd')

    let wrapperTaskLeftHTML = document.createElement('div')
    wrapperTaskLeftHTML.classList.add('wrapper', '-noPd', '-flxCC')

    let wrapperTaskRightHTML = document.createElement('div')
    wrapperTaskRightHTML.classList.add('wrapper', '-noPd', '-flxCC')

    let taskCheckButtonHTML = document.createElement('input')
    taskCheckButtonHTML.classList.add('checkButton')
    taskCheckButtonHTML.type = 'checkbox'
    taskCheckButtonHTML.setAttribute('onclick', 'finishTask('+task.id+')');

    let taskNameHTML = document.createElement('span')
    taskNameHTML.classList.add('taskName')
    taskNameHTML.setAttribute('id', 'taskName')
    taskNameHTML.setAttribute('onclick', 'show('+task.id+')');
    taskNameHTML.innerHTML = task.name

    let wrapperAlertsHTML = document.createElement('div')
    wrapperAlertsHTML.classList.add('wrapper', '-noPd')

    let alertImportantHTML = document.createElement('div')
    alertImportantHTML.classList.add('alert')
    let alertImportantTextHTML = document.createTextNode('Importante')
    alertImportantHTML.appendChild(alertImportantTextHTML)

    let alertUrgentHTML = document.createElement('div')
    alertUrgentHTML.classList.add('alert', '-warning')
    let alertUrgentTextHTML = document.createTextNode('Urgente')
    alertUrgentHTML.appendChild(alertUrgentTextHTML)

    if (isUrgentTask.checked) {
        alertUrgentHTML.classList.add('-show')
    } else if (isImportantTask.checked) {
        alertImportantHTML.classList.add('-show')
    }

    let actionsAreaHTML = document.createElement('div')
    actionsAreaHTML.classList.add('actions')
    actionsAreaHTML.setAttribute('id', 'openActions')
    
    let actionsImageHTML = document.createElement('img')
    actionsImageHTML.src = '../../assets/images/icons/dots.png'
    actionsImageHTML.setAttribute('onclick', 'openActionsFunc('+task.id+')');

    let actionsImageActiveHTML = document.createElement('img')
    actionsImageActiveHTML.classList.add('icon')
    actionsImageActiveHTML.src = '../../assets/images/icons/dots-active.png'
    actionsImageActiveHTML.setAttribute('onclick', 'openActionsFunc('+task.id+')');

    let optionsHTML = document.createElement('div')
    optionsHTML.classList.add('options')
    optionsHTML.setAttribute('id', 'taskOptions')

    let optionEditHTML = document.createElement('span')
    optionEditHTML.classList.add('option')
    let optionEditTextHTML = document.createTextNode('Editar')
    optionEditHTML.appendChild(optionEditTextHTML)
    optionEditHTML.setAttribute('onclick', 'updateTask('+task.id+')');

    let optionDeleteHTML = document.createElement('span')
    optionDeleteHTML.classList.add('option')
    let optionDeleteTextHTML = document.createTextNode('Deletar')
    optionDeleteHTML.appendChild(optionDeleteTextHTML)
    optionDeleteHTML.setAttribute('onclick', 'deleteTask('+task.id+')');

    let descriptionAreaHTML = document.createElement('div')
    descriptionAreaHTML.classList.add('descriptionArea')

    let descriptionHTML = document.createElement('p')
    descriptionHTML.classList.add('taskDescription')
    descriptionHTML.innerHTML = task.description

    mainTaskHTML.appendChild(wrapperTaskHTML)
    
    /*LeftArea*/
    wrapperTaskHTML.appendChild(wrapperTaskLeftHTML)
    wrapperTaskLeftHTML.appendChild(taskCheckButtonHTML)
    wrapperTaskLeftHTML.appendChild(taskNameHTML)

    /*RightArea*/
    wrapperTaskHTML.appendChild(wrapperTaskRightHTML)
    wrapperTaskRightHTML.appendChild(wrapperAlertsHTML)
    wrapperAlertsHTML.appendChild(alertImportantHTML)
    wrapperAlertsHTML.appendChild(alertUrgentHTML)
    wrapperTaskRightHTML.appendChild(actionsAreaHTML)
    actionsAreaHTML.appendChild(actionsImageHTML)
    actionsAreaHTML.appendChild(optionsHTML)
    optionsHTML.appendChild(optionEditHTML)
    optionsHTML.appendChild(optionDeleteHTML)
    optionsHTML.appendChild(actionsImageActiveHTML)

    /*DescriptionArea*/
    mainTaskHTML.appendChild(descriptionAreaHTML)
    descriptionAreaHTML.appendChild(descriptionHTML)

    modalAddTask.classList.add('-hidden');
    buttonAddTask.disabled = true;
    buttonAddTask.classList.add('-disable');
    return mainTaskHTML;
}