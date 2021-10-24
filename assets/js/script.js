
var searchBar = document.getElementById("search-bar");
var searchBtn = document.getElementById("searchBtn");
var cityName = document.getElementById("city-name");
var cityTemp = document.getElementById("city-temp");
var cityHum = document.getElementById("city-hum");
var cityWind = document.getElementById("city-wind");
var day1Temp = document.getElementById("day1Temp");
var day1Wind = document.getElementById("day1Wind");
var day1Hum = document.getElementById("day1Hum");

var day2Temp = document.getElementById("day2Temp");
var day2Wind = document.getElementById("day2Wind");
var day2Hum = document.getElementById("day2Hum");

var day3Temp = document.getElementById("day3Temp");
var day3Wind = document.getElementById("day3Wind");
var day3Hum = document.getElementById("day3Hum");

var day4Temp = document.getElementById("day4Temp");
var day4Wind = document.getElementById("day4Wind");
var day4Hum = document.getElementById("day4Hum");

var day5Temp = document.getElementById("day5Temp");
var day5Wind = document.getElementById("day5Wind");
var day5Hum = document.getElementById("day5Hum");



searchBtn.addEventListener("click", function() {
  var srchTerm = searchBar.value;
  console.log(srchTerm);
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=' + srchTerm + '&units=imperial&appid=27c6c91d331fffec8a4a1d50369b4812'
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      console.log(response);
      var lat = response.coord.lat;
      var lon = response.coord.lon;
      console.log(lat);
      console.log(lon);

    fetch(
      'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,hourly&units=imperial&appid=27c6c91d331fffec8a4a1d50369b4812'
    )
      .then(function(response) {
        return response.json();
      })
      .then(function() {
        console.log(response);
        cityName.textContent = response.name;
        cityTemp.textContent = 'Temp: ' + response.main.temp + '°';
        cityHum.textContent = 'Humidity: ' + response.main.humidity + '%';
        cityWind.textContent = 'Wind: ' + response.wind.speed + ' mph'

      fetch(
        'https://api.openweathermap.org/data/2.5/forecast?lat=' + lat + '&lon=' + lon + '&units=imperial&appid=27c6c91d331fffec8a4a1d50369b4812'
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(response) {
          console.log(response)
          console.log(response.list)
          day1Temp.textContent = 'Temp: ' + response.list[0].main.temp + '°';
          day1Wind.textContent = 'Wind: ' + response.list[0].wind.speed + ' mph';
          day1Hum.textContent = 'Humidity: ' + response.list[0].main.humidity + '%';

          day2Temp.textContent = 'Temp: ' + response.list[1].main.temp + '°';
          day2Wind.textContent = 'Wind: ' + response.list[1].wind.speed + ' mph';
          day2Hum.textContent = 'Humidity: ' + response.list[1].main.humidity + '%';

          day3Temp.textContent = 'Temp: ' + response.list[2].main.temp + '°';
          day3Wind.textContent = 'Wind: ' + response.list[2].wind.speed + ' mph';
          day3Hum.textContent = 'Humidity: ' + response.list[2].main.humidity + '%';

          day4Temp.textContent = 'Temp: ' + response.list[3].main.temp + '°';
          day4Wind.textContent = 'Wind: ' + response.list[3].wind.speed + ' mph';
          day4Hum.textContent = 'Humidity: ' + response.list[3].main.humidity + '%';

          day5Temp.textContent = 'Temp: ' + response.list[4].main.temp + '°';
          day5Wind.textContent = 'Wind: ' + response.list[4].wind.speed + ' mph';
          day5Hum.textContent = 'Humidity: ' + response.list[4].main.humidity + '%';
        });
        // .then(function() {
        //   console.log(response.list);
        //   // day1Temp.textContent = response.list[0].main.temp;
        // })
      });
  });

  
});
