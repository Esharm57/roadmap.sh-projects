let data = JSON.parse(localStorage.getItem('data')) || {};
function togglePasswordVisibility(textBox, eyeImg) {
    var passwordInput = document.querySelector(`.${textBox}`);
    var eyeIcon = document.querySelector(`.${eyeImg}`);
    if (passwordInput.type === 'password') {
        passwordInput.type = 'text';  
        eyeIcon.src = 'images/eye.png';  
    } else {
        passwordInput.type = 'password';  
        eyeIcon.src = 'images/hide.png';  
    }
}

document.addEventListener('DOMContentLoaded', function() {
    const nameInput = document.querySelector('.nameInput');
    const emailInput = document.querySelector('.emailInput');
    const passwordInput = document.querySelector('.passwordInput');
    const passwordConfirm = document.querySelector('.passwordConfirm');
    const progressBar = document.querySelector('.progressBar');

    [nameInput, emailInput, passwordInput, passwordConfirm].forEach(input => {
        input.addEventListener('input', updateProgressBar);
    });

    function updateProgressBar() {
        // Count how many fields are filled
        let filledFields = 0;

        if (nameInput.value.trim() !== "") filledFields++;
        if (emailInput.value.trim() !== "") filledFields++;
        if (passwordInput.value.trim() !== "") filledFields++;
        if (passwordConfirm.value.trim() !== "") filledFields++;

        // Update progress bar based on filled fields
        switch(filledFields) {
            case 1:
                progressBar.src = 'images/25.png';
                break;
            case 2:
                progressBar.src = 'images/50.png';
                break;
            case 3:
                progressBar.src = 'images/75.png';
                break;
            case 4:
                progressBar.src = 'images/100.png';
                break;
            default:
                progressBar.src = 'images/zero.png';
        }
    }
});


