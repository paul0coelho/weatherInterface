const openweathermaps_key = "1ee83006c17a2fbb0a81256d6ae1527a";

window.onload = function () {
    navigator.geolocation.getCurrentPosition(function (position) {
        document.getElementById('paw-form-lat').value = position.coords.latitude;
        document.getElementById('paw-form-lon').value = position.coords.longitude;
    });
};

function searchWeather() {
    var lat = document.getElementById('paw-form-lat').value;
    var lon = document.getElementById('paw-form-lon').value;
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function () {
        if (this.readyState == 4 && this.status == 200) {
            var weatherObject = JSON.parse(xhttp.response);
            var currentWeather = weatherObject["weather"][0]["description"];
            document.getElementById("paw-results-row").style.display = "block";
            document.getElementById("Results").innerHTML = currentWeather;
            document.getElementById("weather-icon").className = "fas fa-" + getWeatherIconClass();
        }
    }

    xhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${openweathermaps_key}`, true);
    xhttp.setRequestHeader('Accept', 'application/json');
    xhttp.send();
}
            
function getWeatherIconClass() {
    if (document.getElementById("Results").innerHTML.includes("clear")) {
        return "sun";
    } else if (document.getElementById("Results").innerHTML.includes("rain")) {
        return "tint";
    } else if (document.getElementById("Results").innerHTML.includes("clouds")) {
        return "cloud";
    } else {
        return "question";
    }
}
            
/*function searchWeather1() {
    var lat = $('#paw-form-lat').val();
    var lon = $('#paw-form-lon').val();
        
    $.ajax({
        url: `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${openweathermaps_key}`,
        method: 'GET',
        dataType: 'json',
        success: function (data) {
            var currentWeather = data.weather[0].description;
            $('#paw-results-row').css('display', 'block');
            $('#Results').html(currentWeather);
        },
        error: function (xhr, status, error) {
        console.error('Error:', error);
        }
    });
}*/