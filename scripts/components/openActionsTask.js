function openActionsFunc (idTask) {
    let thisOptions = document.getElementById(''+idTask+'').querySelector('#openActions').querySelector('#taskOptions')

    if(thisOptions.classList.contains('-open')) {
        thisOptions.classList.remove('-open')
    } else {
        thisOptions.classList.add('-open')
    }
}