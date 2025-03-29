// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Check if we're on the login page
    if (window.location.pathname.endsWith('login.html')) {
        const loginForm = document.getElementById('loginForm');
        const messageDiv = document.getElementById('message');
        const loginFormContainer = document.getElementById('login-form-container');
        const loginSuccessContainer = document.getElementById('login-success-container');

        // Check if already logged in (using sessionStorage)
        if (sessionStorage.getItem('isLoggedIn') === 'true') {
            // show login successful content
            loginFormContainer.style.display = 'none';
            loginSuccessContainer.style.display = 'block';
        }

        loginForm.addEventListener('submit', function (event) {
            event.preventDefault();

            const usernameInput = document.getElementById('username');
            const passwordInput = document.getElementById('password');
            const username = usernameInput.value;
            const password = passwordInput.value;

            if (username === 'test' && password === 'password') {
                messageDiv.textContent = 'Login successful!';
                messageDiv.style.color = 'green';
                // Store login status in sessionStorage
                sessionStorage.setItem('isLoggedIn', 'true');
                //show login successful content
                loginFormContainer.style.display = 'none';
                loginSuccessContainer.style.display = 'block';
                // Clear form fields
                usernameInput.value = '';
                passwordInput.value = '';
            } else {
                messageDiv.textContent = 'Invalid username or password.';
                messageDiv.style.color = 'red';
                // Clear form fields
                usernameInput.value = '';
                passwordInput.value = '';
            }
        });
        // Clear sessionStorage when navigating away from login.html
        window.addEventListener('beforeunload', function (event) {
            if (window.location.pathname.endsWith('login.html')) {
                sessionStorage.removeItem('isLoggedIn');
            }
        });
    }
});

document.addEventListener('DOMContentLoaded', function () {
    const animatedElements = document.querySelectorAll('.animate__animated');

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const animationClass = entry.target.dataset.animation;
                entry.target.classList.add(animationClass);
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.3
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});
