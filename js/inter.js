const loginInput = document.querySelector("#login-form input");
const loginButton = document.querySelector("#login-form button");
const loginForm = document.getElementById("login-form");
const greet = document.getElementById("greeting");
const USERNAME_KEY = "username";
const HIDDEN_CLASS = "hidden";

function loginSubmit(event) {
  event.preventDefault();
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  loginForm.classList.add(HIDDEN_CLASS);
  paintGreets(username);
}

function paintGreets(username) {
  greet.classList.remove(HIDDEN_CLASS),
  greet.innerText = `Hi, ${username}!`
}

const savedName = localStorage.getItem(USERNAME_KEY);

if (savedName === null) {
  loginForm.classList.remove(HIDDEN_CLASS);
  loginForm.addEventListener("submit", loginSubmit);
} else {
  paintGreets(savedName);
}