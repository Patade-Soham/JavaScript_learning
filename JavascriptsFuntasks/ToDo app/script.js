// const add_button = document.getElementById('form_button')

// let i = 0;

// const add =function addTask(){
    
//     let task = document.getElementById('inp').value;
//     let taskstr = 
//     `
//                 <div class="task">
//                     <div class="text">
//                         <h4>${task}</h4>
//                     </div>
//                     <button class="Completed">Completed</button>
//                     <button class="delete">delete</button>
//                 </div>
    
    
//     `;
//     if(task.trim()==''){
//         alert('Enter a task to add')
//     }else{
//         let tasknode=document.createElement('div');
//         tasknode.className='task'
//         tasknode.id = `taskName${i}`
//         tasknode.innerHTML=taskstr;
//         document.getElementById('mainbox').append(tasknode)
//         localStorage.setItem(`taskName${i}`,task)
//         i++;
        

//         // task should remain even after storing
//     }

// }

// add_button.addEventListener('click',add)
// document.getElementById('mainbox').addEventListener('click',(event)=>{
//     let node =event.target.parentElement
//     let elem = event.target.className
//     if(elem=='Completed'){
//         console.log('done')
//         //change css
//         console.log(event.target.closest('.task').querySelector('h4').classList.toggle('textdecor'))


        
//     }else if(elem=='delete'){
//         console.log('eleminated')
//         node.parentElement.remove()
//     }

// })


const add_button = document.getElementById('form_button')

const add = function () {
    let task = document.getElementById('inp').value

    if (task.trim() === '') {
        alert('Enter a task to add')
        document.getElementById('inp').value = ''
        return
    }

    if (task.trim() in localStorage || `& ${task.trim()}` in localStorage) {
        alert('cant enter same task')
        document.getElementById('inp').value = ''
        return
    }

    let tasknode = document.createElement('div')
    tasknode.className = 'task'
    tasknode.id = task

    tasknode.innerHTML = `
        <div class="text">
            <h4>${task}</h4>
        </div>
        <button class="Completed">Completed</button>
        <button class="delete">Delete</button>
    `

    document.getElementById('mainbox').append(tasknode)
    localStorage.setItem(task, task)
    document.getElementById('inp').value = ''
}

add_button.addEventListener('click', add)

document.getElementById('mainbox').addEventListener('click', (event) => {

    if (event.target.classList.contains('Completed')) {
        let taskDiv = event.target.closest('.task')
        let text = taskDiv.querySelector('h4')
        let key = taskDiv.id

        text.classList.toggle('textdecor')

        if (text.classList.contains('textdecor')) {
            localStorage.removeItem(key)
            let newKey = `& ${key}`
            localStorage.setItem(newKey, newKey)
            taskDiv.id = newKey
        } else {
            let cleanKey = key.replace('& ', '')
            localStorage.removeItem(key)
            localStorage.setItem(cleanKey, cleanKey)
            taskDiv.id = cleanKey
        }
    }

    if (event.target.classList.contains('delete')) {
        let key = event.target.closest('.task').id
        localStorage.removeItem(key)
        event.target.closest('.task').remove()
    }
})

function loadTask() {
    for (let i = 0; i < localStorage.length; i++) {
        let key = localStorage.key(i)
        let completed = key.startsWith('& ')
        let task = completed ? key.replace('& ', '') : key

        let tasknode = document.createElement('div')
        tasknode.className = 'task'
        tasknode.id = key

        tasknode.innerHTML = `
            <div class="text">
                <h4 class="${completed ? 'textdecor' : ''}">${task}</h4>
            </div>
            <button class="Completed">Completed</button>
            <button class="delete">Delete</button>
        `

        document.getElementById('mainbox').append(tasknode)
    }
}

loadTask()
