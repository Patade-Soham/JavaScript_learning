const prompt = require("prompt-sync")();

let num = Number.parseInt(prompt('Enter a number of element you want in your series : '))

let first_num = 0;
let next_num =1;
let temp;
let arr = []
let res;

if(num==0){
    console.log('no elements in the series.')
}else if(num==1){
    arr.push(first_num)
    console.log(arr)
}else if(num==2){
    arr.push(first_num)
    arr.push(next_num)
    console.log(arr)
}else{
    arr.push(first_num)
    arr.push(next_num)
    for(let i =0; i<num-2;i++){
        res = first_num+ next_num
        arr.push(res)
        first_num = next_num
        next_num = res
    }
}
console.log(arr)