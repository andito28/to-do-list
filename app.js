const todoForm = document.querySelector("#form-todo");
const todoInput = document.querySelector("input-todo");

todoForm.addEventListener("submit", addTodo);

function addTodo(e){
    e.preventDefault();

    console.log("mantap");
}