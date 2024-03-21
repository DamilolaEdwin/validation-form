const password = document.getElementById("password");
const pass_error = document.querySelector(".pass_error");

function validateLogin(passwordValue) {
    if (passwordValue.length < 6) {
        pass_error.style.display = "block";
        return false;
    } else {
        // If validation passes, redirect to welcome.html
        window.location.href = "welcome.html";
        return true;
    }
}

const loginForm = document.getElementById("loginForm");

loginForm.addEventListener("submit", function(event) {
    event.preventDefault();
    // Pass the value of the password field to the validateLogin function
    validateLogin(password.value);
});

