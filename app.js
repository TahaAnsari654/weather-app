let city = document.getElementById("city");
let country = document.getElementById("country");
let temp = document.getElementById("temp");
let weatherType = document.getElementById("weather-type");
let humidity = document.getElementById("humidity:");
let windSpeed = document.getElementById("wind-speed")
let clouds = document.getElementById("clouds")
let feelsLike = document.getElementById("feels-like")
let weatherImgTemp = document.getElementById("weather-img-temperature")
let result = document.getElementById("result")

navigator.geolocation.getCurrentPosition((location) => {
    let lat = location.coords.latitude;
    let lon = location.coords.longitude;
fetch(`https://api.openweathermap.org/data/2.5/weather?lat=${location.coords.latitude}&lon=${location.coords.longitude}&appid=50bf2c0c611fd572a45bb2a668f207f7&units=metric`)
.then((res) => res.json())
        .then((res) => {
            console.log(res)
            console.log( res)
            city.innerHTML = res.name;
            country.innerHTML = res.sys.country;
            humidity.innerHTML = res.main.humidity + "%";
            temp.innerHTML = Math.round(res.main.temp) + "°C";
            weatherType.innerHTML = res.weather[0].main;
            windSpeed.innerHTML = res.wind.speed + "km/h";
            clouds.innerHTML = res.clouds.all + "%";
            feelsLike.innerHTML = res.main.feels_like + "%";

            // if(res.weather[0].main == "clearday"){
            //     weatherImgTemp.src = "pic/clear-day.svg"
            // } else if (res.weather[0].main == "Rain") {
            //     weatherImgTemp.src = "pic/overcast-rain.svg"  
            // } else if (res.weather[0].main == "Smoke") {
            //     weatherImgTemp.src = "pic/overcast-smoke.svg"
            // } else if (res.weather[0].main == "haze") {
            //     weatherImgTemp.src = "pic/haze-day.svg"
            // } else if (res.weather[0].main == "wind") {
            //     weatherImgTemp.src = "pic/wind.svg"
            // } else if (res.weather[0].main == "clouds") {
            //     weatherImgTemp.src = "pic/cloudy.svg"
            // } else if (res.weather[0].main == "fog-day") {
            //     weatherImgTemp.src = "pic/fog-day.svg"
            // } else if (res.weather[0].main == "cloudy-Night") {
            //     weatherImgTemp.src = "partly-cloudy-night-svg"
            // }

    
        })
        .catch(() => {

            
       console.log(rej)
        })
    })

    
    let weatherlocation = document.getElementById("weather-location");
    let getweather = () => {
   
fetch(`https://api.openweathermap.org/data/2.5/weather?q=${weatherlocation.value}&appid=50bf2c0c611fd572a45bb2a668f207f7&units=metric`)
.then((res) => res.json())
        .then((res) => {

           
            console.log(res)
            console.log( res)
            
            city.innerHTML = res.name;
            country.innerHTML = res.sys.country;
            humidity.innerHTML = res.main.humidity + "%";
            temp.innerHTML = Math.round(res.main.temp) + "°C";
            weatherType.innerHTML = res.weather[0].main;
            windSpeed.innerHTML = res.wind.speed + "km/h";
            clouds.innerHTML = res.clouds.all + "%";
            feelsLike.innerHTML = res.main.feels_like + "%";

            
         
        })

    
    
    
        .catch((rej) => {
            
 console.log(rej)
        })
    }
    


           // if(res.weather[0].main == "clear-day"){
            //     weatherImgTemp.src = "pic/clear-day.svg"
            // } else if (res.weather[0].main == "Rain") {
            //     weatherImgTemp.src = "pic/overcast-rain.svg"  
            // } else if (res.weather[0].main == "Smoke") {
            //     weatherImgTemp.src = "pic/overcast-smoke.svg"
            // } else if (res.weather[0].main == "haze") {
            //     weatherImgTemp.src = "pic/haze-day.svg"
            // } else if (res.weather[0].main == "wind") {
            //     weatherImgTemp.src = "pic/wind.svg"
            // } else if (res.weather[0].main == "clouds") {
            //     weatherImgTemp.src = "pic/cloudy.svg"
            // } else if (res.weather[0].main == "fog-day") {
            //     weatherImgTemp.src = "pic/fog-day.svg"
            // } else if (res.weather[0].main == "cloudy-Night") {
            //     weatherImgTemp.src = "partly-cloudy-night-svg"
            // }
