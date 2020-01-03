const list = document.getElementById("list")

axios.get("https://api.vschool.io/e/todo/").then((response) => {
    const todos = response.data
    console.log(todos)
    for(let i = 0; i < todos.length; i++){
        makeTodo(todos[i])
    }
})

document.add.addEventListener("submit", e => {
    e.preventDefault()
    const newTodo = {
        title: e.target.title.value,
        description: e.target.desc.value
    }

    // axios
    axios.post("https://api.vschool.io/e/todo/", newTodo).then(response => {
        makeTodo(response.data)
    })
})

function makeTodo(todo){
    // create or select DOM element
    const container = document.createElement("div")
    const h1 = document.createElement("h1")
    const p = document.createElement("p")
    const img = document.createElement("img")
    const checkbox = document.createElement("input")
    const deleteButton = document.createElement("button")

    // edit element

    deleteButton.textContent = "delete"

    deleteButton.addEventListener("click", ()=>{
        axios.delete("https://api.vschool.io/e/todo/" + todo._id).then(response => {
            console.log(response.data.msg)
            container.remove()
        })
    })

    h1.textContent = todo.title
    checkbox.type = "checkbox"

    checkbox.checked = todo.completed

    checkbox.addEventListener("change", e => {
        axios.put("https://api.vschool.io/e/todo/" + todo._id, { completed: e.target.checked }).then(response => {
            h1.style.textDecoration = response.data.completed ? "line-through" : "none"
        })
    })
    
    if(todo.completed){
        h1.style.textDecoration = "line-through"
    }

    h1.className = "header"

    p.textContent = todo.description
    img.src = todo.imgUrl
    
    // append
    container.appendChild(h1)
    container.appendChild(checkbox)
    container.appendChild(p)
    container.appendChild(img)
    container.appendChild(deleteButton)

    console.log(container)
    list.appendChild(container)
}

