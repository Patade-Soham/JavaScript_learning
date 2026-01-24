let arr = [4,5,7,5,4]

for(let i = 0 ; i<=arr.length-1;i++){
    arr[i]=arr[i]**2
}
console.log(arr)


//filter even and make new array
let new_arr=[]
for(let i = 0 ; i<=arr.length-1;i++){
    if(arr[i]%2==0){
        new_arr.push(arr[i])
    }
}
console.log(new_arr)