//Use a free Api from the internet &feed your app with live data
//let city = prompt('Enter the city name to see the weather.')

// let getWeather= async ()=>{
//     let response = await fetch(`https://goweather.xyz/weather/NewYork`);
//     let data = await response.json()
    
//     console.log(data)
//     console.log(data.temperature)

//     let ihtml= `
//         <div class="card">
//             <h4 id="city">NewYork</h4>
//             <p id="temp">Temperature : ${data.temperature}</p>
//             <p id="wind">Wind : ${data.wind}</p>
//             <p id="des">Description : ${data.description}</p>
//             <p id="forecast">Forecast : ${data.forecast}</p>
//         </div>`

//     document.body.getElementsByClassName('container').innHTML = ihtml
// }

// getWeather();

// let p = fetch(`https://goweather.xyz/weather/NewYork`)
// p.then((response)=>{return response.json()}).then(
//     (data)=>{
//         console.log(data)
        
//      let ihtml= `
//          <div class="card">
//              <h4 id="city">NewYork</h4>
//              <p id="temp">Temperature : ${data.temperature}</p>
//              <p id="wind">Wind : ${data.wind}</p>
//              <p id="des">Description : ${data.description}</p>

//         </div>`
//         container.innerHTML = ihtml
//     }
// )



let getWeather = async () => {
    let response = await fetch("https://goweather.xyz/weather/NewYork");
    let data = await response.json();

    console.log(data);

    let forecastHTML = "";
    data.forecast.forEach(day => {
        forecastHTML += `
            <p>Day ${day.day}: ${day.temperature}, Wind: ${day.wind}</p>
        `;
    });

    let ihtml = `
        <div class="card">
            <h4 id="city">New York</h4>
            <p id="temp">Temperature : ${data.temperature}</p>
            <p id="wind">Wind : ${data.wind}</p>
            <p id="des">Description : ${data.description}</p>
            <div id="forecast">
                <h5>Forecast:</h5>
                ${forecastHTML}
            </div>
        </div>
    `;

    container.innerHTML = ihtml;
};

getWeather();



