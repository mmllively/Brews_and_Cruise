
var userInput = document.getElementById("user-input");
var searchButton = document.getElementById("search-btn");
var breweryApi = "https://api.openbrewerydb.org/breweries?by_city=san_diego&per_page=3";

var searchHistory = [];




function getApi() {
  
    fetch("https://api.openbrewerydb.org/breweries?by_city=" +userInput.value + "&per_page=3")
    .then(function (response) {
      return response.json();
    })
    .then(function (data) {
      console.log(data)
    });
}
    

var uberBtn = "https://login.uber.com/oauth/v2/authorize?response_type=code&client_id=fxGgDUXYQpOb5wAwN-IQ0O0cInmSK8Lj";






      searchButton.addEventListener("click", function (event) {
        event.preventDefault();
      
        getApi(userInput.value); 
      
        console.log(userInput.value);
    });



    //User opens webpage and sees a welcome prompt telling users how to use the page
    //User types name of the city into the search
    //If they don't type a city name they get prompted to type a correct city
    //If they do type a city name they are presented with the names of local Breweries
    //Then user sees a list breweries
    //Then the user is prompted if they would like an uber to pick them up and take them to that location
    //If they say no, then return to the list of breweries
    //If they say yes, then uber pops up with the location of the brewery you are going to