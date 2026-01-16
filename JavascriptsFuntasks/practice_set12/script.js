// write a js program to pront the following after 2 second delay

// let a = (text)=>{
//     return new Promise((resolve,reject)=>{
//         setTimeout(()=>{
//             resolve(text)
//         },2000)
//     })
// }
// (
//     async()=>{
//         let text = await a('hello')
//         console.log(text)
//         text = await a('world')
//         console.log(text)
//     }
// )()

// Write a js program to find average of numbers in an arr using spread

let sum = (arr)=>{
    let a =0
    for(let i =0; i <arr.length;i++){
        a += arr[i]
    }
    return a
}

const arr = [8,6,7]
console.log(sum(arr)/arr.length)