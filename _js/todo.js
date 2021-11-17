const toDoForm = document.getElementById("todo-form");
const toDoInput = toDoForm.querySelector("input");
const toDoList = document.getElementById("todo-list");

const TODOS_KEY = "todos";

let toDos = [];

function saveToDos() {
  localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
}

function deleteTodo(event) {
  const li = event.target.parentElement;
  li.remove();
  toDos = toDos.filter((toDo) => toDo.id !== parseInt(li.id));
  saveToDos();
}

function paintTodo(newToDo) {
  const li = document.createElement("li");
  li.id = newToDo.id;

  const span = document.createElement("span");
  span.innerText = newToDo.text;

  const editBtn = document.createElement("button");
  editBtn.classList.add("edit");
  editBtn.innerText = "EDIT";
  editBtn.addEventListener("click", () => {
    edit.classList.remove("hidden");
    span.classList.add("hidden");
    editBtn.classList.add("hidden");
    editOk.classList.remove("hidden");
    edit.value = span.innerText;
  });

  const editOk = document.createElement("button");
  editOk.classList.add("hidden", "editOk");
  editOk.innerText = "OK";
  editOk.addEventListener("click", () => {
    edit.classList.add("hidden");
    span.classList.remove("hidden");
    editBtn.classList.remove("hidden");
    editOk.classList.add("hidden");
    span.innerText = edit.value;
    localStorage.removeItem("todos");
    let toDos = [{ id: li.id, text: edit.value }];
    localStorage.setItem(TODOS_KEY, JSON.stringify(toDos));
  });

  const edit = document.createElement("input");
  edit.classList.add("hidden");
  edit.value = span.innerText;

  const checkTodo = document.createElement("button");
  checkTodo.classList.add("check");
  checkTodo.innerText = "✔";
  checkTodo.addEventListener("click", () => {
    span.classList.toggle("line");
  });

  const deleteList = document.createElement("button");
  deleteList.classList.add("delete");
  deleteList.innerText = "✖";
  deleteList.addEventListener("click", deleteTodo);

  li.appendChild(editBtn);
  li.appendChild(editOk);
  li.appendChild(edit);
  li.appendChild(span);
  li.appendChild(checkTodo);
  li.appendChild(deleteList);
  toDoList.appendChild(li);
}

function toDoSubmit(event) {
  event.preventDefault();

  const newToDo = toDoInput.value;
  toDoInput.value = "";

  const newTodoObj = {
    text: newToDo,
    id: Date.now(),
  };
  toDos.push(newTodoObj);
  paintTodo(newTodoObj);
  saveToDos();
}

toDoForm.addEventListener("submit", toDoSubmit);

const savedToDos = localStorage.getItem(TODOS_KEY);

if (savedToDos !== null) {
  const parsedToDos = JSON.parse(savedToDos);
  toDos = parsedToDos;
  parsedToDos.forEach(paintTodo);
}
