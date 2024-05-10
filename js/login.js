document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const loginButton = document.querySelector('#loginButton');

    const validateForm = () => {
        const isInvalid = !emailInput.value || !passwordInput.value;
        loginButton.classList.toggle('disabled', isInvalid); // just for styling
        loginButton.disabled = isInvalid; // Actually disable the button
    };

    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
});
