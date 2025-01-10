if (window.location.pathname.includes('todo.html') && !localStorage.getItem('user')) {
    window.location.href = 'index.html';
}

// Toggle between Login/Register
const formTitle = document.getElementById('form-title');
const toggleLink = document.getElementById('toggle-link');
const toggleText = document.getElementById('toggle-form');

if (toggleLink) {
    toggleLink.addEventListener('click', () => {
        if (formTitle.innerText === 'Login') {
            formTitle.innerText = 'Register';
            toggleText.innerHTML = 'Already have an account? <a href="#" id="toggle-link">Login</a>';
        } else {
            formTitle.innerText = 'Login';
            toggleText.innerHTML = 'Don\'t have an account? <a href="#" id="toggle-link">Register</a>';
        }
    });
}

// Auth Logic
const authForm = document.getElementById('auth-form');
if (authForm) {
    authForm.addEventListener('submit', (e) => {
        e.preventDefault();
        const username = document.getElementById('username').value;
        const password = document.getElementById('password').value;

        if (formTitle.innerText === 'Register') {
            if (!localStorage.getItem(username)) {
                localStorage.setItem(username, password);
                alert('Registration successful! Please login.');
                formTitle.innerText = 'Login';
            } else {
                alert('User already exists!');
            }
        } else {
            if (localStorage.getItem(username) === password) {
                localStorage.setItem('user', username);
                window.location.href = 'todo.html';
            } else {
                alert('Invalid credentials!');
            }
        }
    });
}

// Logout
const logoutButton = document.getElementById('logout');
if (logoutButton) {
    logoutButton.addEventListener('click', () => {
        localStorage.removeItem('user');
        window.location.href = 'index.html';
    });
}