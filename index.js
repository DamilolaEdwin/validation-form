const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirm_password");
const pass_error = document.querySelector(".pass_error");
const confirmPass_error = document.querySelector(".confirmPass_error");

function validateSignUp(passwordValue, confirmPasswordValue){
  if (passwordValue !== confirmPasswordValue){
    confirmPass_error.style.display = "block";
    pass_error.style.display = "none";
      return false;
  }
  if (passwordValue.length < 6 || confirmPasswordValue.length < 6){
        pass_error.style.display = "block";
        confirmPass_error.style.display = "none";
      return false;
  }

  // If validation passes, return true
  return true;
}

const signupForm = document.getElementById("signupForm");

signupForm.addEventListener("submit", function(event){
   event.preventDefault();
   if(validateSignUp(password.value, confirmPassword.value)) {
       // If validation succeeds, redirect to login.html
       window.location.href = "login.html"; 
   }
});
