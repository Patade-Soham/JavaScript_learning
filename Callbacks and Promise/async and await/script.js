async function hello() {
    let delhiWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('27deg')
        },1000)
    })
    let mumbaiWeather = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve('29deg')
        },3000)
    })
    let delW = await delhiWeather
    let mumW = await mumbaiWeather
    return [delW,mumW];
}

console.log('welcome to weather control room')

let a = hello()
console.log(a)
