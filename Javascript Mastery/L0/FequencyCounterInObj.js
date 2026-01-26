let obj = {}
let str = 'lsdfgl;sjfv;lsdvml;mvvfm;lv'
let arr = []
for(let i=0;i<=str.length-1;i++){
    arr.push(str[i])
}

for(let i = 0;i<=arr.length-1;i++){ 
    let counter =0

    for(let j = i+1;j<=arr.length-1;j++){
        if(arr[i]==arr[j]){
            counter+=1
            arr.splice(j,1)
            j--
        }
    }
    obj[arr[i]]=counter
}
console.log(obj)


// for(let i = 0;i<=str.length-1;i++){ 
//     var counter = 0;

//     for(let j = i+1;j<=str.length-1;j++){
//         if(str[i]==str[j]){
//             counter +=1;
//             str.slice(j,1)
//             j--
//         }
//     }
//     obj[str[i]]=counter;

// }
// console.log(obj)