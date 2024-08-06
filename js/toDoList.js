// html 연결
const todoForm = document.querySelector("form#todoForm");
const todoInput = document.querySelector("form#todoForm input");
const todoList = document.querySelector("ul#todoList")

let savedTodoList = JSON.parse(localStorage.getItem("todoList"))
if (!savedTodoList) {
    savedTodoList = [];
}

// show
function show(todo) {
    const li = document.createElement("li");
    li.id = todo.id;
    li.innerText = todo.text;
    todoList.appendChild(li);
    const button = document.createElement("button");
    button.innerText = "❌";
    button.addEventListener("click", deleteTodo);
    li.appendChild(button);
}

// add todo
function addTodo(todo) {
    show(todo);
    savedTodoList.push(todo);
}

// delete todo
function deleteTodo(event) {
    const li = event.target.parentElement;
    li.remove();
    savedTodoList = savedTodoList.filter((todo) => todo.id !== parseInt(li.id));
    saveTodoList();
}

// save todoList
function saveTodoList() {
    localStorage.setItem("todoList", JSON.stringify(savedTodoList));
}

// submit 발생시 실행
function handleTodoSubmit(event) {
    event.preventDefault();
    let newTodo = {
        id: Date.now(),
        text: todoInput.value
    };
    addTodo(newTodo);
    saveTodoList();
    todoInput.value = "";
}

// todoList 표시
function showTodoList() {
    savedTodoList.forEach((todo) => show(todo));
}

todoForm.addEventListener("submit", handleTodoSubmit);
showTodoList();
