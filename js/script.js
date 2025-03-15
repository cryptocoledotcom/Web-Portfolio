// script.js

document.addEventListener('DOMContentLoaded', function () {
    // Check if we're on the login page
    if (window.location.pathname.endsWith('login.html')) {
        // Check if already logged in (using sessionStorage)
        if (sessionStorage.getItem('isLoggedIn') === 'true') {
            // show login successful content
            document.getElementById('login-form-container').style.display = 'none';
            document.getElementById('login-success-container').style.display = 'block';
        }

        const loginForm = document.getElementById('loginForm');
        const messageDiv = document.getElementById('message');

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
                document.getElementById('login-form-container').style.display = 'none';
                document.getElementById('login-success-container').style.display = 'block';

            } else {
                messageDiv.textContent = 'Invalid username or password.';
                messageDiv.style.color = 'red';
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