const openweathermaps_key = "1ee83006c17a2fbb0a81256d6ae1527a"

        function searchWeather(lat, lon) {
            var lat = document.getElementById('paw-form-lat').value;
            var lon = document.getElementById('paw-form-lon').value;
            var xhttp = new XMLHttpRequest();
            xhttp.onreadystatechange = function () {
                if (this.readyState == 4 && this.status == 200) {
                    var weatherObject = JSON.parse(xhttp.response);
                    var currentWeather = weatherObject["weather"][0]["description"];
                    document.getElementById("paw-results-row").style.display = "block";
                    document.getElementById("Results").innerHTML = currentWeather;
                }
            }

            xhttp.open("GET", `http://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&APPID=${openweathermaps_key}`, true);
            xhttp.setRequestHeader('Accept', 'application/json');
            xhttp.send();
        }