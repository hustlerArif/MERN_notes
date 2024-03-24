let todo_input = document.querySelector(".input");
let addBtn = document.querySelector(".button");
let showTodo = document.querySelector(".todo_container");
let todo;
let todoList=[]


addBtn.addEventListener("click", (e) => {
    e.preventDefault();
    todo = todo_input.value;

    if(todo.length>0){
        todoList.push({todo_item:todo})
    }

    renderTodoList(todoList);

    todo_input.value = ""; 
// console.log(todoList)
});

function renderTodoList(todoList){

    showTodo.innerHTML=todoList.map(({todo_item})=>
    `
    <div>
    <label> ${todo_item} </label>
    <button> Delete</button>
    </div>
    `)

    // check if you can delete without using link to key id
}
