let a = document.getElementById('btn1')
// let b = document.getElementById('btn2')
// let c = document.getElementById('btn3')

// let x = ()=>{
//     alert('this is button 1')
// }
// let y = ()=>{
//     alert('this is button 2')
// }
// let z = ()=>{
//     alert('this is button 3')
// }

// create a website which is capable of storing bookmarks of websites using href and event listeners

// let x =()=>{
//     window.location='https://google.com'
// }
// let y =()=>{
//     window.location='https://facebook.com'
// }
// let z =()=>{
//     window.location='https://chess.com'
// }


//a.addEventListener('click', x)
// b.addEventListener('click', y)
// c.addEventListener('click', z)

let switchButton =()=>{
    document.body.classList.toggle('glow')
}
a.addEventListener('click',switchButton)
