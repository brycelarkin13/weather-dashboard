var city;

const APIKEY = "e78cada811c8675dd1bb60b68aa5f2d0";

var getWeatherData = function() {
    
    var queryURL = "http://api.openweathermap.org/data/2.5/weather?q=" + city + "&appid=" + APIKey;

    fetch(queryURL).then(function(response) {
        response.json().then(function(data) {
            displayTemp(data, city);
        })
    })
}