// write load script function using promises

// let loadScript =  (src)=>{
//     return new Promise((resolve, reject)=>{
//             let script = document.createElement('script')
//             script.type='text/javascript'
//             script.src=src
//             document.body.appendChild(script)
//             script.onload=()=>{
//                 console.log('resolving')
//                 resolve(1)
//             }
//             script.onerror=()=>{
//                 console.log('rejecting')
//                 reject(0)
                
//             }

//     })
// }

// let p = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js")

// p.then((value)=>{
//     console.log(value)
// }).catch((error)=>{
//     console.log('here is error ')
// })


// const loadScript = async (src)=>{
//         return new Promise((resovle,reject)=>{
//         let script = document.createElement('script')
//         script.type='text/javascript'
//         script.src=src
//         document.body.appendChild(script)

//         script.onload=()=>{
//             console.log('resolving....')
//             resovle(1)
            
//         }
//     })


// }
// const main1 = async()=>{
//     let p = await loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js")
//     console.log(p)
// }
// main1()

// let p = ()=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         reject(new Error('new error'))
//     },3000)

// })
// }
// const main1 = async ()=>{
//     try{
//         let a = await p()
//         console.log(a)
//     }catch(err){
//         console.log('error handled')

//     }
// }

// main1()


// Write a program using Promise.all() inside an async/await to await 3 promises. 
// compare its result wit the case where we await these promises one by one  


let p1 = async()=>{
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('value 1');
    }, 1000);
})}
let p2 = async()=>{
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('value 1');
    }, 2000);
})}
let p3 = async()=>{
    return new Promise((resolve, reject)=>{
    setTimeout(() => {
        resolve('value 1');
    }, 3000);
})}

let run = async ()=>{
    console.time('run')
    let p = await Promise.all([p1(),p2(),p3()])
    console.log(p)
    console.timeEnd('run')
}
run()// time 3016.841064453125 ms

let runManually=async()=>{
    console.time('runManually')
    let a1 = await p1()
    let a2 = await p1()
    let a3 = await p1()

    console.log(a1,a2,a3)
    console.timeEnd('runManually')
  
}
runManually() // time 3184.3464567
