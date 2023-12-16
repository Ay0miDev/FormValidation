const form = document.getElementById("formRegister");

const username = document.getElementById("username");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");

// Get all the P elements
const usernameError = document.getElementById("usernameError");
const emailError = document.getElementById("emailError");
const passwordError = document.getElementById("passwordError");
const confirmPasswordError = document.getElementById("confirmPasswordError");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const hasErrors = validateInputs();

  if(!hasErrors){
    alert('Submit Successful')
    username.value = ''
    email.value = ''
    password.value = ''
    confirmPassword.value = ''
  }
});

const setError = (element, message) => {
element.classList.add('error')
  element.textContent = message;
};

function validateInputs() {
 hasError = false

  const usernameValue = username.value;
  const emailValue = email.value;
  const passwordValue = password.value;
  const confirmPasswordValue = confirmPassword.value;


  //Email Regular Expression
  const isValidEmail = (email) => {
    const re =
      /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return re.test(String(email).toLowerCase());
  };

  if (usernameValue == "") {
    setError(usernameError, 'This field cannot be empty');
    hasError = true
} else if (usernameValue.length < 6) {
    setError(usernameError, 'input cannot be less than 6');
    hasError = true
} else {
    usernameError.textContent = "";
}

if (emailValue == "") {
    setError(emailError, 'This field cannot be empty');
    hasError = true
} else if (!isValidEmail(emailValue)) {
    setError(emailError, 'Provide a valid email')
    hasError = true
}else {
    emailError.textContent = '';
}

if (passwordValue == ''){
    setError(passwordError, 'This field cannot be empty')
    hasError = true
}else if (passwordValue.length < 8){
    setError(passwordError, 'Password should not be less than 8')
    hasError = true
}else{
    passwordError.textContent = ''
}

if (confirmPasswordValue == ''){
    setError(confirmPasswordError, 'This field cannot be empty')
    hasError = true
}else if (confirmPasswordValue !== passwordValue){
    setError(confirmPasswordError, 'Passwords do not match')
    hasError = true
  }else{
    confirmPasswordError.textContent = ''
  }

  return hasError
}

[username, email, password, confirmPassword].forEach((input)=>{
  input.addEventListener('click', ()=>{
    input.style.border = 'none'
  })
})