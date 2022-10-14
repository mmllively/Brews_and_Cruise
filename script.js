
var userInput = document.getElementById("user-input");
var searchButton = document.getElementById("search-btn");
var breweryApi = "https://api.openbrewerydb.org/breweries?"
var mapsApi = "https://maps.googleapis.com/maps/api/js?key=AIzaSyA6hnt2FKT5Jpb5MuKdVCx7iJupZd-71pg&callback=initMap"


var breweryNames = [];

function getApi() {
  
    fetch("https://api.openbrewerydb.org/breweries?by_city=" +userInput.value + "&per_page=50")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
      getBrewList(data);
    });
}
getBrewList = (BreweryData) => {
var brewName = BreweryData[0].name;
var brewType = BreweryData[0].brewery_type;
var brewphone = BreweryData[0].phone;
var brewUrl = BreweryData[0].website_url;
var brewAdd = BreweryData[0].address;
var brewLat = BreweryData[0].latitude;
var brewLon = BreweryData[0].longitude;
 console.log(brewName);
 console.log(brewType);
 console.log(brewphone);
 console.log(brewUrl);
 console.log(brewAdd);
 console.log(brewLat);
 console.log(brewLon);

 for (let index = 0; index <BreweryData.length; index++) {
  breweryNames.push(BreweryData[index].name);
 }

 for (let index = 0; index <BreweryData.length; index++) {
  breweryNames.push(BreweryData[index].brewery_type);
 }

 for (let index = 0; index <BreweryData.length; index++) {
  breweryNames.push(BreweryData[index].phone);
 }

 for (let index = 0; index <BreweryData.length; index++) {
  breweryNames.push(BreweryData[index].website_url);
 }

 for (let index = 0; index <BreweryData.length; index++) {
  breweryNames.push(BreweryData[index].address);
 }

 for (let index = 0; index <BreweryData.length; index++) {
  breweryNames.push(BreweryData[index].latitude);
 }

 for (let index = 0; index <BreweryData.length; index++) {
  breweryNames.push(BreweryData[index].longitude);
 }


console.log(breweryNames);
};
//appending divs as children or hardcode divs 
//create an if/then statement to check and see if there is lat and lon...if they don't swap to city...if it doesn't have lat/lon OR city then don't show it

      searchButton.addEventListener("click", function (event) {
        event.preventDefault();
      
        getApi(userInput.value); 
      
        console.log(userInput.value);
    });

