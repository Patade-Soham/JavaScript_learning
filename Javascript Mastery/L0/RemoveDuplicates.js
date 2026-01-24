let arr = [3,4,6,5,6,5,4,6]

for(let i = 0;i<=arr.length-1;i++){ 

    for(let j = i+1;j<=arr.length-1;j++){
        if(arr[i]==arr[j]){
            arr.splice(j,1)
            j--
        }
    }
}
console.log(arr)