function submitRegister(event) {
    console.log("Funcția submitRegister a fost apelată.");

    event.preventDefault(); 

    
    const usernameInput = document.getElementById('username');
    const emailInput = document.getElementById('email');
    const passwordInput = document.getElementById('password');
    const confirmPasswordInput = document.getElementById('confirmPassword');

    if (usernameInput.value.trim() === "") {
        alert("Te rugăm să introduci un nume de utilizator.");
        return;
    }

    if (emailInput.value.trim() === "") {
        alert("Te rugăm să introduci o adresă de email.");
        return;
    }

   
    const emailPattern = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailPattern.test(emailInput.value.trim())) {
        alert("Te rugăm să introduci o adresă de email validă.");
        return;
    }

    if (passwordInput.value.trim() === "") {
        alert("Te rugăm să introduci o parolă.");
        return;
    }

    if (passwordInput.value.trim().length < 6) {
        alert("Parola trebuie să conțină cel puțin 6 caractere.");
        return;
    }

    if (confirmPasswordInput.value.trim() === "") {
        alert("Te rugăm să confirmi parola.");
        return;
    }

    if (passwordInput.value.trim() !== confirmPasswordInput.value.trim()) {
        alert("Parolele nu coincid. Vă rugăm să reintroduceți parola.");
        return;
    }

   
    localStorage.setItem('username', usernameInput.value.trim());
    localStorage.setItem('email', emailInput.value.trim());
    localStorage.setItem('password', passwordInput.value.trim());

    
    alert("Te-ai înregistrat cu succes! Acum poți să te autentifici.");

    
    window.location.href = "login.html";
}


document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('registerForm').addEventListener('submit', submitRegister);
});
