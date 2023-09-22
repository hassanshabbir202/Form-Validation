let login = document.getElementById("login");
let username = document.getElementById("username");
let password = document.getElementById("password");
let error = document.getElementById("error");

function loginValidation() {
  if (!username.value && !password.value) {
    error.innerHTML = "*Plz Fill Out this All Fields*";
    setTimeout(() => {
      error.innerHTML = "";
    }, 1500);
  } else if (username.value && !password.value) {
    error.innerHTML = "*Plz Enter the Password*";
    setTimeout(() => {
      error.innerHTML = "";
    }, 1500);
  } else if (!username.value && password.value) {
    error.innerHTML = "*Plz Enter the Username*";
    setTimeout(() => {
      error.innerHTML = "";
    }, 1500);
  } else if (username.value.length < 4) {
    error.innerHTML = "*Enter Atleast 4 characters In Username*";
    setTimeout(() => {
      error.innerHTML = "";
    }, 1500);
  } else if (Number(username.value)) {
    error.innerHTML = "*Plz Enter Valid username*";
    setTimeout(() => {
      error.innerHTML = "";
    }, 1500);
  } else if (password.value.length < 5) {
    error.innerHTML = "*Atleast 5 characters In Password*";
    setTimeout(() => {
      error.innerHTML = "";
    }, 1500);
  } else {
    alert("Login Successfully");
    username.value = "";
    password.value = "";
  }
}

login.addEventListener("click", loginValidation);
