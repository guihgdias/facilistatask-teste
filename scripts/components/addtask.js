var buttonOpenModal = document.querySelector('.addtask-button');
var buttonCloseModal = document.querySelector('.closeModal');
var modalAddTask = document.querySelector('#addTaskModal');
var buttonAddTask = document.querySelector('.addNewTask');
var nameNewTask = document.querySelector('#nameNewTask');
var descriptionNewTask = document.querySelector('#description');
var taskListArea = document.querySelector('#taskList');

buttonOpenModal.addEventListener('click', () => {
    modalAddTask.classList.remove('-hidden');
});

buttonCloseModal.addEventListener('click', () => {
    modalAddTask.classList.add('-hidden');
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
    return Math.floor(Math.random() * 3000);
}

function addNewTask(task) {
    let createTask = createTaskHtml(task);
    taskListArea.appendChild(createTask);
    nameNewTask.value = '';
    descriptionNewTask.value = '';
}

function createTaskHtml(task) {

    let mainTask = document.createElement('div');
    mainTask.id = task.id;
    mainTask.classList.add('main-task');

    let mainDescription = document.createElement('p');
    mainDescription.classList.add('taskDescription', 'main-description', '-semidark');
    mainDescription.innerHTML = task.description;

    let mainWrapper = document.createElement('div');
    mainWrapper.classList.add('wrapper', '-borderBot');
    mainWrapper.setAttribute('onclick', 'show('+task.id+')');

    let firstWrapper = document.createElement('div');
    firstWrapper.classList.add('wrapper', '-flxCC');

    let inputCheck = document.createElement('input');
    inputCheck.classList.add('checkButton');
    inputCheck.type = 'checkbox';

    let taskName = document.createElement('span');
    taskName.classList.add('taskName');
    taskName.innerHTML = task.name;

    let secondWrapper = document.createElement('div');
    secondWrapper.classList.add('wrapper', '-flxCC');

    let actions = document.createElement('div');
    actions.classList.add('actions');

    let actionsImage = document.createElement('img');
    actionsImage.src = '../../assets/images/icons/dots.png'

    mainTask.appendChild(mainWrapper);
    mainTask.appendChild(mainDescription);
    mainWrapper.appendChild(firstWrapper);
    mainWrapper.appendChild(secondWrapper);
    firstWrapper.appendChild(inputCheck);
    firstWrapper.appendChild(taskName);
    secondWrapper.appendChild(actions);
    actions.appendChild(actionsImage);

    modalAddTask.classList.add('-hidden');
    return mainTask;
}