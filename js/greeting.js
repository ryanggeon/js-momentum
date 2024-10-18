const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.getElementById("login-form");
const greet = document.getElementById("greeting");

const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

function loginSubmit() {
  localStorage.setItem(USERNAME_KEY, loginInput.value);
  loginForm.classList.add(HIDDEN_CLASS);
  paintGreets();
}

const username = localStorage.getItem(USERNAME_KEY);

function paintGreets() {
  greet.classList.remove(HIDDEN_CLASS);
  greet.innerText = `Hi, ${username}!`;
}

if (username === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreets();
}
