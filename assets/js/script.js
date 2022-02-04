var city;
// API Key
const APIKey = "";

var getWeatherData = function() {
    
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    fetch(queryURL).then(function(response) {
        response.json().then(function(data) {
            displayTemp(data, city);
            console.log(city);
        })
    })
}

getWeatherData();