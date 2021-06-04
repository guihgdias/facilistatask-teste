function deleteTask(idTask) {
    let confirm = window.confirm('Tem certeza que deseja excluir?')

    if(confirm) {
        let thisTask = document.getElementById(''+idTask+'')
        if(thisTask) {
            taskListArea.removeChild(thisTask);
        }
    }
}