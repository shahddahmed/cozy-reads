document.addEventListener('DOMContentLoaded', () => {
    const emailInput = document.querySelector('#email');
    const passwordInput = document.querySelector('#password');
    const loginButton = document.querySelector('#loginButton');

    function validateForm() {
        const emailRegex = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,4}$/;
        const isEmailValid = emailRegex.test(emailInput.value);

        const isInvalid = !isEmailValid || !passwordInput.value;
        loginButton.classList.toggle('disabled', isInvalid); // just for styling
        loginButton.disabled = isInvalid; // Actually disable the button
    };

    emailInput.addEventListener('input', validateForm);
    passwordInput.addEventListener('input', validateForm);
});
