function tabClick(tabName) {
    if (!document.querySelector(`.${tabName}`).classList.contains('active')) {
        document.querySelector(`.${tabName}`).classList.add('active');
    } 

    if (document.querySelector('.firstTab').classList.contains('active') && (tabName != 'firstTab')) {
        document.querySelector('.firstTab').classList.remove('active');
    } else if (document.querySelector('.secondTab').classList.contains('active') && (tabName != 'secondTab')) {
        document.querySelector('.secondTab').classList.remove('active');
    } else if (document.querySelector('.thirdTab').classList.contains('active') && (tabName != 'thirdTab')) {
        document.querySelector('.thirdTab').classList.remove('active');
    } else if (document.querySelector('.fourthTab').classList.contains('active') && (tabName != 'fourthTab')) {
        document.querySelector('.fourthTab').classList.remove('active');
    }

    if (tabName == 'firstTab') {
        document.querySelector('.firstContent').classList.remove('hidden');
        document.querySelector('.secondContent').classList.add('hidden');
        document.querySelector('.thirdContent').classList.add('hidden');
        document.querySelector('.fourthContent').classList.add('hidden');
    } else if (tabName == 'secondTab') {
        document.querySelector('.firstContent').classList.add('hidden');
        document.querySelector('.secondContent').classList.remove('hidden');
        document.querySelector('.thirdContent').classList.add('hidden');
        document.querySelector('.fourthContent').classList.add('hidden');
    } else if (tabName == 'thirdTab') {
        document.querySelector('.firstContent').classList.add('hidden');
        document.querySelector('.secondContent').classList.add('hidden');
        document.querySelector('.thirdContent').classList.remove('hidden');
        document.querySelector('.fourthContent').classList.add('hidden');
    } else if (tabName == 'fourthTab') {
        document.querySelector('.firstContent').classList.add('hidden');
        document.querySelector('.secondContent').classList.add('hidden');
        document.querySelector('.thirdContent').classList.add('hidden');
        document.querySelector('.fourthContent').classList.remove('hidden');
    }
}