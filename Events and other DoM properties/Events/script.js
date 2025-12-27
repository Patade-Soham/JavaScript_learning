let a = document.getElementById('btn');

let x=function(){
    alert('hello1')
};
let y=function(){
    alert('hello2')
};

a.addEventListener('click',x)

a.addEventListener('click',y)

let b = prompt('what is your fav no ')

if(b==2){
    a.removeEventListener('click',x);
}
else{
    a.removeEventListener('click',y);
}