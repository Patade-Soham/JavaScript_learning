let add_button = document.getElementById('form_button')

let add_task = (e)=>{
    e.preventDefault()
    const task = document.getElementById('inp').value

    let taskbox = 
    `
                <div class="task">
                    <div class="text">
                        <h4>${task}</h4>
                    </div>
                    <button id="delete">delete</button>
                </div>
    `
    document.getElementById('taskbox').innerHTML= taskbox
}



add_button.addEventListener('click',add_task)
let del_button = document.getElementById('delete')

let del_task = (e)=>{
    document.getElementById('taskbox').innerHTML= ''
    e.preventDefault()
}

del_button.addEventListener('click',del_task)