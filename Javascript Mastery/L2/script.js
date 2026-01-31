// let head = document.getElementById('page-heading');
// let p1 = document.querySelector('p');
// let p2 = document.body.getElementsByClassName('box')
// let btn=document.getElementById('btn')

// // btn.style.background='yellow';
// // p1.style.background='green'
// // head.style.background='cyan'
// let counter =0
// btn.addEventListener('click',()=>{
//     counter +=1
//     p1.innerHTML = 
//     `
//     ${counter}
//     `
// })

// const input = document.getElementById('userInput');
// const preview = document.getElementById('livePreview');
// // Listen for real-time input
// input.addEventListener('input', () => {
//   preview.innerText = input.value; // Updates the paragraph
// })

// let subBtn = document.getElementById('sub')
// let inpBtn = document.getElementById('inp')

// subBtn.addEventListener('click',(e)=>{
//   document.body.innerHTML=`<p>${inpBtn.value}</p>`
//   preventDefault(e);
// })

let modebtn = document.getElementById('btn');
let btntext = document.getElementById('sp');


// modebtn.addEventListener('click',()=>{
//   let a= Math.floor(Math.random() * 100) + 1
//   let c= Math.floor(Math.random() * 100) + 1
//   let b= Math.floor(Math.random() * 100) + 1

//   document.body.style.background=`rgb(${a}, ${b}, ${c})`

// })

modebtn.addEventListener('click',()=>{
  let r=  Math.floor(Math.random() * 100) + 1; // just to check unique one 
  let elem=document.createElement('div')
  elem.innerHTML=
  `
  <div class="card" style="width: 18rem;">
  <img src="..." class="card-img-top" alt="...">
  <div class="card-body">
    <h5 class="card-title">Card title</h5>
    <p class="card-text">${r} Some quick example text to build on the card title and make up the bulk of the card’s content.</p>
    <a href="#" class="btn btn-primary">Go somewhere</a>
  </div>
</div>
  `
  document.body.appendChild(elem)
})

document.body.addEventListener('click',(event)=>{
  event.target.closest('div').remove()
})