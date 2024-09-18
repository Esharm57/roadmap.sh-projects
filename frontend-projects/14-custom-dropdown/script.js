function dropdownButtonClicked(no) {
    let x = document.querySelector(`.content${no}`)
    let y = document.querySelector(`.dropButton${no}`)

    if (y.innerHTML == 'v') {
        y.innerHTML = '^'
        x.classList.remove('hidden')
    } else if (y.innerHTML == '^') {
        y.innerHTML = 'v'
        x.classList.add('hidden');
    }
}

function dropdownItemClicked(no1, no2) {
    document.querySelector(`.content${no1}`).classList.add('hidden');
    document.querySelector(`.dropButton${no1}`).innerHTML = 'v';
    document.querySelector(`.item${no1}`).innerHTML = document.querySelector(`.drop${no1}Choice${no2}`).innerHTML
}