let p = fetch('https://goweather.xyz/weather/Berlin')
p.then((response)=>{
    console.log(response.status)
    console.log(response.ok)
    return response.json()
}).then((response2)=>{
    console.log(response2)
})

let options={
    method: 'POST',
    headers:{
        'content-type':"application/json"
    }
}