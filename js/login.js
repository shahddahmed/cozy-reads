document.addEventListener('DOMContentLoaded', function () {
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const loginButton = document.querySelector('#loginButton');

    function validateForm() {
        if (emailInput.value === '' || passwordInput.value === '') {
            loginButton.classList.add('disabled');
            loginButton.disabled = true;
        }
        else {
            loginButton.classList.remove('disabled');
            loginButton.disabled = false;
        }
    }

    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
});