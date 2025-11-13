const list = [23,43,14,"str",false];
console.log(list.length);
console.log(list[3]);
console.log(list[3][0]);

const nums=[13,445,56,78,45,48]

nums.sort((a, b) => a - b);
console.log(nums); 

nums.push(14);
console.log(nums)


nums[6]=57
console.log(nums)

nums.pop(nums[4])
console.log(nums)


for(let i=0; i<nums.length;i++){
    console.log(nums[i])
}
for(let number in nums){
    console.log(nums[number])
}
for(let numbers of nums){
    console.log(numbers)
}
// More Methods in arrays 

const arr=[1,4,5,6,8]
console.log(arr.toString())

console.log(arr.join("-"))

const newarr=[1,4,5,6,8]
newarr.pop()

console.log(newarr)

newarr.push(8)
console.log(newarr)

newarr.shift()
console.log(newarr)

newarr.unshift(3)
console.log(newarr)

delete newarr[2]
console.log(newarr)

console.log(newarr.concat(arr))

newarr.splice(2,2,77,88,55,66)
console.log(newarr)

console.log(newarr.slice(1,3))
console.log(newarr.slice(2))


let b=newarr.map((value)=>{
    console.log(value)
    return value+1
})
console.log(b);







