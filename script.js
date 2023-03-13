// Set OpenWeatherMap API key and URL
const apiKey = "3e3988a0b5bc4f155bb1cca9831f5268";
const apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");
const weatherIcon = document.querySelector(".weather-icon");


async function checkWeather(city){
    // Fetch weather data for given city using OpenWeatherMap API
    const response = await fetch(apiUrl + city + `&appid=${apiKey}`);
   
    // If response city not found, display error message and hide weather data
    if(response.status == 404){
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    }else{
        // Parse JSON response data
        var data = await response.json();

        // Display weather data for given city
        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + " km/h";
        
        // Set weather icon based on weather condition
        if(data.weather[0].main === "Clouds"){
            weatherIcon.src = "images/clouds.png";
        }
        else if(data.weather[0].main === "Clear"){
            weatherIcon.src = "images/clear.png";
        }
        else if(data.weather[0].main === "Rain"){
            weatherIcon.src = "images/rain.png";
        }
        else if(data.weather[0].main === "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }
        else if(data.weather[0].main === "Mist"){
            weatherIcon.src = "images/mist.png";
        }
        else if(data.weather[0].main === "Snow"){
            weatherIcon.src = "images/snow.png";
        }

        // Display weather data and hide error message
        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";

    }         
    
}

searchBtn.addEventListener("click", ()=>{
    checkWeather(searchBox.value);
});
