// let a = ()=>{
//     return new Promise((resolve,reject)=>{
//     setTimeout(()=>{
//         resolve(765)
//     },2000)
// })
// }
// (async()=>{
//     let b = await a();
//     console.log(b)
// })()// imedialty invoked function


// Destructuring

// let arr = [3,6,567,8,5,4]
// let [a,b , ...rest]=arr

// console.log(a)
// console.log(b)
// console.log(rest)

// let obj = {
//     name:'John',
//     company:'sdfa',
//     add:'adsd' 
// }

// console.log({...obj,name:'som'})
 
// hoisting 

// console.log(a)
// greet()
// function greet(){
//     console.log('hello')
// } // works
// var a=9;
// console.log(a)

// closures

// function hello1(){
//     let msg = 'ggg'
//     {
//         let msg='gggg'
//         console.log(msg)
//     }
//     console.log(msg)
//     let c = ()=>{
//         console.log('i am c'+msg)
//     }
//     return c
// }
// c=hello1()
// c()
