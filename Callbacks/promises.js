let promise= new Promise(function(resolve,reject){
    console.log('hello p')
    resolve(2)
})


console.log('hello')
setTimeout(function(){
    console.log('hello in 2s')
},2000)
console.log('my name is som')
console.log(promise)