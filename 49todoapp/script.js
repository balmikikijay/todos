const form = document.getElementById('form') // parent of input and todos
const input = document.getElementById('input')
const todos = document.getElementById('todos')


const todoSave = JSON.parse(localStorage.getItem('todoSave')) 
 
if(todoSave){
    todoSave.forEach(todo => addTodo(todo))
}

form.addEventListener('submit',(e)=>{
    e.preventDefault()
    addTodo()
})

function addTodo(todo) {
    let todoText = input.value
    if(todo){ 
        todoText = todo.text
    }

    if(todoText){
        const todoEl = document.createElement('li')
        if(todo && todo.completed){
            todoEl.classList.add('completed')
        }
        todoEl.innerText = todoText
       

        todoEl.addEventListener('click',()=>{
            todoEl.classList.toggle('completed')
             updateLs ()
        })

           todoEl.addEventListener('contextmenu',(e)=>{
            e.preventDefault()
            todoEl.remove()
             updateLs ()
        })


        todos.appendChild(todoEl)
        input.value = ''

        updateLs()
    }
}

function updateLs (){
    todoEl = document.querySelectorAll('li')

    const todoSave = []
    todoEl.forEach(todoEL => {
        todoSave.push({
            text: todoEL.innerText,
            completed: todoEL.classList.contains('completed')
        })
    })

    localStorage.setItem('todoSave',JSON.stringify(todoSave))

}