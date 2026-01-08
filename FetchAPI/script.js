// let p = fetch('https://goweather.xyz/weather/NewYork')
// p.then((response)=>{
//     console.log(response.status)
//     console.log(response.ok)
//     return response.json()
// }).then((response2)=>{
//     console.log(response2)
// })


// async function getWeather() {
    
//     let response = await fetch('https://goweather.xyz/weather/NewYork')
    
//     alert(response.headers.get('Content-Type'));
    
//     for(let [key,value] of response.headers){
//         alert(`${key}=${value}`)
//     }
//     let data = await response.json()
//     console.log(data);
// }

// getWeather()


// let createTodo = async ()=>{
//     let options={
//         method: 'POST',
//         headers:{
//             'content-type':"application/json"
//         },
//         body : JSON.stringify({
//             task:'Study',
//             time :'7:00 pm',
//             priority : 'must-do',
//         })
//     }
//     let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
//     let response = await p.json()
//     return response;
// }

// let mainFunc = async()=>{
//     let todo = await createTodo()
//     console.log(todo);
// }
// mainFunc()


let createTodo = async (todo)=>{
    let options={
        method: 'POST',
        headers:{
            'content-type':"application/json"
        },
        body : JSON.stringify(todo)
    }
    let p = await fetch('https://jsonplaceholder.typicode.com/posts', options)
    let response = await p.json()
    return response;
}

let mainFunc = async()=>{
    let todo={
        task : 'Code',
        time :'00:01 am'
    }

    let todor = await createTodo(todo)
    console.log(todor);
}
mainFunc()
