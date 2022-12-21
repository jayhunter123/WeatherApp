let weather = {
    apiKey : "6bf342dc39a19e3c56afe3aa7cab96a2",
    fetchWeather: function(city) {
        fetch(
            "https://api.openweathermap.org/data/2.5/weather?q=" 
            + city 
            + "&units=metric&appid=" 
            + this.appKey
        )
        .then((response) => response.json())
        .then((data) => this.displayWeather(data));
    }
}