// console.log(document.cookie)
// document.cookie = 'name=dfklasdflkasjdfl'
// document.cookie = 'name=dfklasdfljkjsdfnasdnf'
// let key = prompt('enter key ')
// let value = prompt('enter  value')

// document.cookie = `${key}=${value}`
// document.cookie = `${encodeURIComponent(key)}=${encodeURIComponent(value)}`

// console.log(document.cookie)


let key = prompt('enter key ')
let value = prompt('enter  value')

localStorage.setItem(key,value);
console.log(`The value at ${key} is ${value}`);

let p=localStorage.getItem(key);
console.log(p)



