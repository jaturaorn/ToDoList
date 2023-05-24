const data = new Date();

const todoForm = document.querySelector("#todo-form");
const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");
const editForm = document.querySelector("#edit-form");
const editInput = document.querySelector("#edit-input");
const cancelEditBtn = document.querySelector("#cancel-edit-btn");

// const timeElapsed = Date.now();
// const today = new Date(timeElapsed);
// document.getElementById("date").innerHTML = today.toDateString(today);

function time() {
    const data = new Date();
    let h = data.getHours();
    let m = data.getMinutes();
    let s = data.getSeconds();

    if(h < 10)
        h = "0"+ h;
    if(m < 10)
        m = "0"+ m;
    if(s < 10)
        s = "0"+ s;

    document.getElementById("hour").innerHTML = h + ":" + m + ":" + s;
    setTimeout('time()', 500);
}

todoForm.addEventListener("submit", (e) => {
    e.preventDefault();
    const inputValue = todoInput.ariaValueMax;
    if(inputValue)
        saveTodo(inputValue);//Save fuction
})

const saveTodo = (text) => {
    const todo = document.createElement("div");
    todo.classList.add("todo");

    const todoTitle = document.createElement("h3");
    todoTitle.innerText = text;
    todo.appendChild(todoTitle);

    const doneBtn = document.createElement("button");
    doneBtn.classList.add("finish-todo");
    doneBtn.innerHTML = '<i class="fa-solid fa-check"></i>'
}