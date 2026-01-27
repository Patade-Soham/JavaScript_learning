let head = document.getElementById('page-heading');
let p1 = document.querySelector('p');
let p2 = document.body.getElementsByClassName('box')
let btn=document.getElementById('btn')

// btn.style.background='yellow';
// p1.style.background='green'
// head.style.background='cyan'
let counter =0
btn.addEventListener('click',()=>{
    counter +=1
    p1.innerHTML = 
    `
    ${counter}
    `
})