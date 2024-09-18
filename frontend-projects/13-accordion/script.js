function ifHidden(no) {
    let y = document.querySelector(`.js-accBox${no}`);
    
    if (document.querySelector(`.accButton${no}`).innerHTML == 'v') {
        y.classList.remove('hidden');
        document.querySelector(`.accButton${no}`).innerHTML = '^';
    } else if (document.querySelector(`.accButton${no}`).innerHTML == '^') {
        y.classList.add('hidden');
        document.querySelector(`.accButton${no}`).innerHTML = 'v';
    } 

    if (document.querySelector(`.accButton1`).innerHTML == '^' &&  no !== '1') {
        document.querySelector(`.accButton1`).innerHTML = 'v';
        document.querySelector(`.js-accBox1`).classList.add('hidden');
    } else if (document.querySelector(`.accButton2`).innerHTML == '^' && no !== '2') {
        document.querySelector(`.accButton2`).innerHTML = 'v';
        document.querySelector(`.js-accBox2`).classList.add('hidden');
    } else if (document.querySelector(`.accButton3`).innerHTML == '^' && no !== '3') {
        document.querySelector(`.accButton3`).innerHTML = 'v';
        document.querySelector(`.js-accBox3`).classList.add('hidden');
    } else if (document.querySelector(`.accButton4`).innerHTML == '^' && no !== '4') {
        document.querySelector(`.accButton4`).innerHTML = 'v';
        document.querySelector(`.js-accBox4`).classList.add('hidden');
    }
}