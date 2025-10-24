const todoInput = document.getElementById('todoInput')
const btn = document.getElementById('add-btn')
const list = document.getElementById('list')

//  if their is todos in localstorage then try to save

const saved = localStorage.getItem('todos') // saved todos in localstorage
const todos = saved ? JSON.parse(saved) : [];



function savetodo(){
    //  save currunt todaos array
    localStorage.setItem('todos',JSON.stringify(todos))

}

// create a dom node for a todo object and append to the list
 function createTodoNode (todo, index){

 }
//  render the whole todo list from todo array
  function render (){
         list.innerHTML = ``;
 }