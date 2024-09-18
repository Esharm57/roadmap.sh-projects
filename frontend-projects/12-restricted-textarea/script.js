function textLimit() {
    let text = document.querySelector('.js-textarea');
    let Limit = document.querySelector('.js-textlimit');
    if (text.value.length > 250) {
        text.value = text.value.substring(0, 250);
        Limit.classList.add('limitReached');
    } else if (text.value.length < 250 && Limit.classList.contains('limitReached')) {
        Limit.classList.remove('limitReached');
    }
    Limit.innerHTML = `${text.value.length}/250`;
}