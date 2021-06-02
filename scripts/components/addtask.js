const buttonOpenModal = document.querySelector('.addtask-button');
const buttonCloseModal = document.querySelector('.closeModal');
const modalAddTask = document.querySelector('#addTaskModal');
const buttonAddTask = document.querySelector('.addNewTask');

buttonOpenModal.addEventListener('click', () => {
    modalAddTask.classList.remove('-hidden');
});

buttonCloseModal.addEventListener('click', () => {
    modalAddTask.classList.add('-hidden');
});

buttonAddTask.addEventListener('click', () => {
    modalAddTask.classList.add('-hidden');
})