const todoInput = document.querySelector(".todo-input");
//Date 
let today = Date.now();
let todayDate = new Date(today);
document.getElementById('current-date').innerHTML = todayDate.toDateString();
//functions
function addTodo(event){
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