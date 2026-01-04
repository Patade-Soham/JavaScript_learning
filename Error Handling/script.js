// try{
//     console.log(som)

// }catch(err){
//     console.log(err)
// }

// setTimeout(()=>{
//         try{
//             console.log(som)
//         }catch(err){
//             console.log(err)
//         }
//     }

//     ,3000)

// try{
//     let age = prompt('enter your age ')
//     age = Number.parseInt(age)
//     if (age>120){
//         throw new ReferenceError('Invalid age')
//     }
// }catch(err){
//     console.log(err.name)
//     console.log(err.message)
//     console.log(err.stack)
// }

try{
    let a= 0 
    console.log('try block')
    // console.log(program)
}catch(err){
    console.log('this is error')
    // console.log(p)
}finally{
    console.log('finally always runs')
}

let f = ()=>{
    try{

    console.log('try block fnc')
    // console.log(program)
    return 
}catch(err){
    console.log('this is error')
    // console.log(p)
}finally{
    console.log('finally always runs !')
}
}
f()