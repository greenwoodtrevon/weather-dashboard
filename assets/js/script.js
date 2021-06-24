var exampleFunction = function() {
  fetch(
    'https://api.openweathermap.org/data/2.5/weather?q=Draper&appid=27c6c91d331fffec8a4a1d50369b4812'
  )
    .then(function(response) {
      return response.json();
    })
    .then(function(response) {
      var lat = response.coord.lat;
      var lon = response.coord.lon;
      console.log(lat);
      console.log(lon);

      fetch(
        'https://api.openweathermap.org/data/2.5/onecall?lat=' + lat + '&lon=' + lon + '&exclude=minutely,hourly&appid=27c6c91d331fffec8a4a1d50369b4812'
      )
        .then(function(response) {
          return response.json();
        })
        .then(function(repsonse) {
          console.log(response);
        })
    });
  };    
 //onecall?lat={lat}&lon={lon}&exclude={part}&appid={API key}');

var searchBar = document.getElementById("search-bar");
var searchBtn = document.getElementById("searchBtn");

searchBtn.addEventListener("click", function() {
  var srchTerm = searchBar.value;
  exampleFunction();
  console.log(srchTerm);
})
