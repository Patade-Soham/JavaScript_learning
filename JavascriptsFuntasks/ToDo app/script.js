const add_button = document.getElementById('form_button')
const del_button = document.getElementById('delete')
const comp_button = document.getElementById('Completed')
let i = 0;

const add =function addTask(){
    
    let task = document.getElementById('inp').value;
    let taskstr = 
    `
                <div class="task">
                    <div class="text">
                        <h4>${task}</h4>
                    </div>
                    <button id="Completed">Completed</button>
                    <button id="delete">delete</button>
                </div>
    
    
    `;
    if(task.trim()==''){
        alert('Enter a task to add')
    }else{
        let tasknode=document.createElement('div');
        tasknode.className='task'
        tasknode.id = `taskName${i}`
        tasknode.innerHTML=taskstr;
        document.getElementById('mainbox').append(tasknode)
        localStorage.setItem(`taskName${i}`,task)
        i++;
        // task should remain even after storing
    }

}
const done =function update(){
    alert('done') // these task should be done on event basis i.e. where the event is happening
}
const del =function addTask(){
    alert('deleted')
}

add_button.addEventListener('click',add)
del_button.addEventListener('click',del)
comp_button.addEventListener('click',done)// wont work cause buttons are been created after adding items needs to be fixed