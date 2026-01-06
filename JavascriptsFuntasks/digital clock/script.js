// let hourBlock = document.body.getElementById('hours')
// let minBlock = document.body.getElementById('min')
// let secBlock = document.body.getElementById('sec')

setInterval(()=>{
    let mins=new Date().getMinutes()
    let hrs = new Date().getHours()
    let secs = new Date().getSeconds()
    hours.innerHTML=hrs
    min.innerHTML=mins
    sec.innerHTML=secs
},1000)

