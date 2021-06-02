function show(idTask) {
    let thisTask = document.getElementById(''+idTask+'');

    if(thisTask.classList.contains('-open')) {
        thisTask.classList.remove('-open')
    } else {
        thisTask.classList.add('-open')
    }
}