// Here all L0 logic is converted into function

// countVowels

function countVowels(str){
    let counter = 0;


    for(let i = 0;i<str.length;i++){
        if(str[i] == 'a'){
            counter+=1
        }
        if(str[i] == 'e'){
            counter+=1
        }
        if(str[i] == 'i'){
            counter+=1
        }
        if(str[i] == '0'){
            counter+=1
        }
        if(str[i] == 'u'){
            counter+=1
        }
    }
    return counter
}
// console.log(countVowels('asdfasfuuudssdg'));

// Frequency Counter

function frequencyCounter(str){
    let obj = {}
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
    return obj
}
// console.log(frequencyCounter('lsdfgl;sjfv;lsdvml;mvvfm;lv'));

// fibonacci

function fibonacci(num){
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
    return arr
}
// console.log(fibonacci(6));

// Max of three

function maxOfthree(num1,num2,num3){
    if(num1>num2 && num1>num3){
        return num1
    }else if(num2>num1 && num2>num3){
        return num2
    }else if(num3>num2 && num3>num1){
        return num3
    }
}
// console.log(maxOfthree(4,5,6))

// min max of array

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
    return {'Min': min,'max':max} ;
}

// let n = minMaxofArr([7,6,54,7,8])
// console.log(n.Min)

// object => array => object

function OaO(student){
    let names = []
    let details = []

    for(let key in student){
        names.push(key)
        details.push(student[key])
    }

    console.log(names, details)
    let new_obj={}
    for(let i=0;i<=names.length-1;i++){
        new_obj[names[i]]=details[i]
    }
    return new_obj ;
}

// odd evens

function oddevens(num){
    if(num%2==0){
        console.log(num+' is Even')
    }else{
        console.log(num+' is Odd')
    }
    
}

// remove duplicates

function removeDuplicate(arr){
    for(let i = 0;i<=arr.length-1;i++){ 

        for(let j = i+1;j<=arr.length-1;j++){
            if(arr[i]==arr[j]){
                arr.splice(j,1)
                j--
            }
        }
    }
}

// reverse string

function reverseString(str){
    let rev_str = ''

    for(let i = str.length-1 ; i>=0;i--){
        rev_str = rev_str+str[i]
    }
}

//squared array

function squaredArr(arr){
    for(let i = 0 ; i<=arr.length-1;i++){
        arr[i]=arr[i]**2
    }
}

// sum of all element in the array

function sumOfArrElem(arr){
    let sum = 0
    for(let i=0;i<arr.length;i++){
        sum += arr[i]
    }
    return sum

}
