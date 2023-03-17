var APIkey = 'b63b9cf706a5ef6e91e1fda2235a006b';
var city = austin;

var fiveAPIurl = 'http://api.openweathermap.org/data/2.5/forecast?lat={lat}&lon={lon}&appid={API key}';
var latLonAPI = 'http://api.openweathermap.org/geo/1.0/direct?q=' + cityName{city name},{state code},{country code}&limit={limit}&appid={API key}';

function getApi() {
    var requestUrl = 'http://api.openweathermap.org/geo/1.0/direct?q={city name},{state code},{country code}&limit={limit}&appid={API key}';

    fetch(requestUrl)
        .then(function (response) {
            return response.json();
        })
        .then(function (data) {
            console.log(data)
        })

}