var weatherContainer = document.getElementById("weather-container");
var searchButton = document.getElementById("search-button");
var findCity = document.getElementById("city-search");
// API Key
const APIKey = "e78cada811c8675dd1bb60b68aa5f2d0";

var getWeatherData = function(city) {
    
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&units=imperial&appid=" + APIKey;

    fetch(queryURL).then(function(response) {
        return response.json()
    })
    .then(function(data) {
        console.log(data);
        console.log(data.main.temp);
        console.log(data.main.humidity);
        console.log(data.name);
        console.log(data.wind.speed);
        console.log(data.weather[0].icon);
        var HTML = `<h1>${data.name}<span>${data.weather[0].icon}</span></h1>
        <h2>Temp: ${data.main.temp}F</h2>
        <h2>Humidity: ${data.main.humidity}%</h2>`
        weatherContainer.innerHTML= HTML
    })
    
}

searchButton.addEventListener("click", function() {
getWeatherData(findCity.value);
})

