const todoForm = document.querySelector("#form-todo");
const todoInput = document.querySelector("#input-todo");
const todoList = document.querySelector("#todo-list")

todoForm.addEventListener("submit", addTodo);
todoList.addEventListener("click", deleteTodo);

function addTodo(e){

    e.preventDefault();

    const li = document.createElement("li");
    const a = document.createElement("a");

    li.className = "list-group-item mb-1 d-flex align-items-center justify-content-between";
    li.appendChild(document.createTextNode(todoInput.value));

    a.href = "#";
    a.className = "badge badge-danger";

    a.innerHTML = "Delete";

    li.appendChild(a);

    todoList.appendChild(li);
    
}


function deleteTodo(e){

    e.preventDefault();

}