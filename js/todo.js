const toDoForm=document.getElementById('todo-form')
const toDoInput=document.querySelector('#todo-form input')
const toDoList=document.getElementById('todo-list')

const toDos=[];

function deleteToDo(event){
    const target=event
    const li=event.target.parentElement
    li.remove()
}

function saveToDos(){
    localStorage.setItem("todos",toDos)
}

function paintToDo(newTodo){
    const li=document.createElement("li")
    const span = document.createElement("span")
    span.innerText=newTodo
    const button=document.createElement("button")
    button.innerHTML="X"
    button.addEventListener('click',deleteToDo)
    li.appendChild(span)
    li.appendChild(button)
    
    toDoList.appendChild(li)
}


function handleToDoSubmit(event){
    event.preventDefault();
    const newTodo=toDoInput.value;
    toDoInput.value=""
    toDos.push(newTodo)
    paintToDo(newTodo)
    saveToDos()
}

function handleRemoveButton(){
    // const target=e.target
    console.log("11")
    
}

toDoForm.addEventListener("submit",handleToDoSubmit)



