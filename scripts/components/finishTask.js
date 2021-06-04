function finishTask(idTask) {
    let thisTask = document.getElementById(''+idTask+'')
    let thisCheck = thisTask.querySelector('.input-checkbox')
    let thisName = thisTask.querySelector('#taskName')

    if(thisCheck.classList.contains('-active') == false) {
        thisCheck.classList.add('-active')
        thisTask.style = 'opacity: 50%'
        thisName.style = 'text-decoration: line-through'
    } else {
        thisCheck.classList.remove('-active')
        thisTask.style = 'opacity: 100%'
        thisName.style = 'text-decoration: none'
    }
}