function temperatureConverter(temp){
    let farhenite= 	(temp * 9/5) + 32
    let kelvin = 	temp + 273.15
    return {'ferhenite':farhenite,'Kelvin':kelvin}
}
console.log(temperatureConverter(10))