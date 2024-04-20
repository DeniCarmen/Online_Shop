document.addEventListener('DOMContentLoaded', function() {
    
    const currentUser = sessionStorage.getItem("currentUser");
    const loginLink = document.getElementById('loginLink');
    const registerLink = document.getElementById('registerLink');
    const logoutLink = document.getElementById('logoutLink');
    const loggedInUsername = document.getElementById('loggedInUsername');

    if (currentUser) {
        if (loginLink) {
            loginLink.style.display = 'none';
        }
        if (registerLink) {
            registerLink.style.display = 'none';
        }
        if (logoutLink) {
            logoutLink.style.display = 'block';
        }
        if (loggedInUsername) {
            loggedInUsername.textContent = currentUser;
            loggedInUsername.style.display = 'inline'; 
        }
    } else {
        if (loginLink) {
            loginLink.style.display = 'block';
        }
        if (registerLink) {
            registerLink.style.display = 'block';
        }
        if (logoutLink) {
            logoutLink.style.display = 'none';
        }
        if (loggedInUsername) {
            loggedInUsername.style.display = 'none'; 
        }
    }

   
    function submitLogin(event) {
        event.preventDefault(); 

        const usernameInput = document.getElementById('username').value;
        const passwordInput = document.getElementById('password').value;

        const storedUsername = localStorage.getItem('username');
        const storedPassword = localStorage.getItem('password');

        if (usernameInput === storedUsername && passwordInput === storedPassword) {
            alert("Autentificare reușită! Bine ai venit, " + storedUsername + "!");
            sessionStorage.setItem("currentUser", storedUsername);

            
            if (loginLink) {
                loginLink.style.display = 'none';
            }
            if (registerLink) {
                registerLink.style.display = 'none';
            }
            if (logoutLink) {
                logoutLink.style.display = 'block';
            }
            if (loggedInUsername) {
                loggedInUsername.textContent = storedUsername;
                loggedInUsername.style.display = 'inline'; 
            }

            window.location.href = "index.html";
        } else {
            alert("Credențiale incorecte. Te rugăm să verifici numele de utilizator și parola.");
        }
    }

   
    function logout(event) {
        event.preventDefault();
        sessionStorage.removeItem("currentUser");

        
        if (loginLink) {
            loginLink.style.display = 'block';
        }
        if (registerLink) {
            registerLink.style.display = 'block';
        }
        if (logoutLink) {
            logoutLink.style.display = 'none';
        }
        if (loggedInUsername) {
            loggedInUsername.style.display = 'none'; 
        }

        
    }

   
    const loginForm = document.getElementById('loginForm');
    if (loginForm) {
        loginForm.addEventListener('submit', submitLogin);
    }

    
    if (logoutLink) {
        logoutLink.addEventListener('click', logout);
    }
});
