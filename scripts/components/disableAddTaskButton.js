let buttonAddTask = document.querySelector('.addNewTask')
let buttonEditTask = document.querySelector('.editTask')

buttonAddTask.disabled = true;
buttonAddTask.classList.add('-disable');

function checkInputs() {
  let contentInput = nameNewTask.value;
  let contentINputDesc = descriptionNewTask.value;
    if (contentInput !== null && contentInput !== '' && contentINputDesc !== null && contentINputDesc !== '') {
      buttonAddTask.disabled = false;
      buttonAddTask.classList.remove('-disable');
    } else {
      buttonAddTask.disabled = true;
      buttonAddTask.classList.add('-disable');
    }
}

nameNewTask.addEventListener("input", () => {
  checkInputs()
});

descriptionNewTask.addEventListener("input", () => {
  checkInputs()
});