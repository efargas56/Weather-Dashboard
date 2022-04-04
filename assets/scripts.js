var cityList = [];
var cityname;
function geoLocate() {
    var requestLocationUrl = http://api.openweathermap.org/geo/1.0/direct?q=${searchInput}&limit=1&appid=${apiKey}
    fetch(requestLocationUrl) 
    .then(function(response){
      return response.json();
    })
    .then(function(currentLocation) {
      let tempArr = [];
      tempArr.push(currentLocation);
      geoArr = tempArr;
      let lat2 = geoArr[0][0].lat;
      lat = lat2;
      let lon2 = geoArr[0][0].lon;
      lon = lon2;
    })
  .then(function(){
      oneCall();
    });
  };
  var lat = '';
  var lon = '';