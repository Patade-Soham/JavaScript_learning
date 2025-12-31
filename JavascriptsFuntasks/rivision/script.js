function countRabbit(){
    for(let i=1;i<=3;i++){
        alert('rabit count :' +i);
    }
}
let elem=document.getElementById('countbtn');
elem.onclick=countRabbit;

let eventh1= document.getElementById('e1')
let eventh2= document.getElementById('e1')
let eventh3= document.getElementById('e2')

function fun(){
    alert('Have fun')
}
function morefun(){
    alert('Have more fun')
}
function funny(){
    alert('you are funny')
}


eventh1.addEventListener('click',fun);
eventh1.addEventListener('click',morefun);
eventh3.addEventListener('click',funny);
// eventh1.removeEventListener('click',fun)