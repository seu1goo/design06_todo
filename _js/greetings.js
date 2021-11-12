const user = document.querySelector("#user");
const loginForm = document.querySelector("#login-form");
const loginInput = document.querySelector("#login-form input");
const greeting = document.querySelector("#todo");
const greetingName = document.querySelector("#greeting");

const HIDDEN_CLASSNAME = "hidden";
const USERNAME_KEY = "username";

function onLoginSubmit(event) {
  event.preventDefault();

  user.classList.add(HIDDEN_CLASSNAME);
  const username = loginInput.value;
  localStorage.setItem(USERNAME_KEY, username);
  paintGreetings(username);
  username.value = "";
}

function paintGreetings(username) {
  greetingName.innerText = `${username}`;
  greeting.classList.remove(HIDDEN_CLASSNAME);
}

const savedUsername = localStorage.getItem(USERNAME_KEY);

if (savedUsername === null) {
  // show the form
  loginForm.addEventListener("submit", onLoginSubmit);
  user.classList.remove(HIDDEN_CLASSNAME);
} else {
  // hidden the greetings
  paintGreetings(savedUsername);
}
