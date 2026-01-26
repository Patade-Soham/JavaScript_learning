function sumOfArrElem(arr){
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum

}
function minMaxofArr(arr){
    let min = arr[0];
    let max = arr[0];

    for (let i = 1; i < arr.length; i++) {
        if (arr[i] < min) {
            min = arr[i];
        }
        if (arr[i] > max) {
            max = arr[i];
        }
    }
    return {'Min': min,'Max':max} ;
}

function average(arr){
    return sumOfArrElem(arr)/arr.length
}

function arrayAnalyzer(arr){
    return {'sum':sumOfArrElem(arr),'min':minMaxofArr(arr).Min,'max':minMaxofArr(arr).Max,'average':average(arr)};
}
console.log(arrayAnalyzer([4,5,8,6,5,1]))