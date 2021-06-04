function show(idTask) {
    let thisDescription = document.getElementById(''+idTask+'').querySelector('.descriptionArea ')

    if(thisDescription.classList.contains('-open')) {
        thisDescription.classList.remove('-open')
    } else {
        thisDescription.classList.add('-open')
    }
}