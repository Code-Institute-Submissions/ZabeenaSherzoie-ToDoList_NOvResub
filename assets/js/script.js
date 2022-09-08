const todoInput = document.querySelector(".todo-input");
//Date 
let today = Date.now();
let todayDate = new Date(today);
document.getElementById('current-date').innerHTML = todayDate.toDateString();
//functions
//Adding task fuction
function addTodo(event) {
    event.preventDefault();
    //adding todo div
    const todoDiv = document.createElement("div");
    todoDiv.classList.add('todo');
    // create list
    const newTodo = document.createElement('li');
    newTodo.innerText = todoInput.value;
    newTodo.classList.add('todo-item');
    todoDiv.appendChild(newTodo);
    //adding todo to the localstorage
    saveLocalTodos(todoInput.value);
    //creating Check mark button
    const completedButton = document.createElement("button");
    completedButton.innerHTML = '<i class="fas fa-check"></i>';
    completedButton.classList.add("complete-btn");
    todoDiv.appendChild(completedButton);
    //creating trash button
    const trashButton = document.createElement("button");
    trashButton.innerHTML = '<i class="fas fa-trash"></i>';
    trashButton.classList.add("trash-btn");
    todoDiv.appendChild(trashButton);
    // append to list
    todoList.appendChild(todoDiv);
    // clear todo input value
    todoInput.value = "";
}
//function to check whether to be marked as completed or delete
function deleteCheck(e) {
    const item = e.target;
    //delete
    if (item.classList[0] === 'trash-btn') {
        const todo = item.parentElement;
        // delete animation
        todo.classList.add('fall');
        removeLocalTodos(todo);
        todo.addEventListener("transitioned", function () {
            todo.remove();
        });
    }
    //completed
    if (item.classList[0] === 'complete-btn') {
        const todo = item.parentElement;
        todo.classList.toggle("completed");
    }
}
// filter according different select elements
function filterTodo(e) {
    const todos = todoList.childNodes;
    todos.forEach(function (todo) {
        //switch case for different condition
        switch (e.target.value) {
            case "all":
                todo.style.display = "flex";
                break;
            case "completed":
                if (todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
            case "uncompleted":
                if (!todo.classList.contains("completed")) {
                    todo.style.display = "flex";
                } else {
                    todo.style.display = "none";
                }
                break;
        }
    });

}