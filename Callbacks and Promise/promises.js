// let promise= new Promise(function(resolve,reject){
//     console.log('hello p')
//     resolve(2)
// })


// console.log('hello')
// setTimeout(function(){
//     console.log('hello in 2s')
// },2000)
// console.log('my name is som')
// console.log(promise)

// let p = new Promise(function(resolve,reject){
//     console.log('promise is pending')
//     setTimeout(() => {
//         console.log('I am a promise')
//         resolve(true);
//     }, 3000);
// })
// console.log(p);

// let q = new Promise(function(resolve,reject){
//     console.log('another promise is pending')
//     setTimeout(() => {
//         console.log('I am a promise')
//         reject(new Error('i am error'))
//     }, 3000);
// })
// console.log(q);

// p.then((value)=>{
//     console.log('value :',value)
// })

// q.catch((error)=>{
//     console.log('some error occured here.')
// })

// let p = new Promise((resolve)=>{
//     setTimeout(()=>{
//         console.log('promise fulfilled')
//         resolve(20)
//     },3000)
    
// })
// p.then(alert)
// p.then((c)=>{
//     console.log(c)
// })

// let q = new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         console.log('promise rejected')
//         reject(new Error('i am error'))
//     },3000)
// })
// q.catch((error)=>{
//     console.log('an error has occured')
// })

// write loadScript function using promises

// function loadScript(src ,callback){
//     let script = document.createElement('script');
//     script.src=src;
//     script.onload=function(){
//         console.log('you script is loaded src : ', src)
//         callback(null,src);
//     }
//     script.onerror=function(){
//         console.log('error ', src);
//         callback(new Error('src got error'))
//     }
//     document.body.appendChild(script);
// }

const loadScript= (src)=>{
    return new Promise((resolve,reject)=>{
        let script = document.createElement('script');
        script.type='text/javascript'
        script.src=src
        document.body.appendChild(script)
        script.onload=()=>{
            console.log('script loded')
            resolve(1)
        }
        script.onerror=()=>{
            console.log(' its error ')
            reject(0)
        }
    })
}
let p = loadScript("https://cdn.jsdelivr.net/npm/bootstrap@5.3.8/dist/js/bootstrap.bundle.min.js")

p.then((value)=>{
    console.log(value)
}).catch((error)=>{
    console.log('here is error ')
})
