function GetInfo() {
    var newName = document.getElementById("userInput");
    var cityName = document.getElementById("cityName");

    fetch("https://api.openbrewerydb.org/breweries?by_city=" + newName.value + "&per_page=100")
        .then((data) => {
            return data.json();
        })
        .then((completedata) => {
            let data1 = "";
            completedata.map((values) => {
                data1 += `<div class="card">
                <h3 class="title">${values.name}</h3 >
                <p class="brewerytype"><b>Brewery Type:</b> ${values.brewery_type}</p>
                <p class="websiteurl">${values.website_url}</p>
                <p class="address">${values.street}</p>
                <p class="city">${values.city}, ${values.state}  ${values.postal_code}</p>
                <p class="lat">Latitude: ${values.latitude}</p>
                <p class="lon">Longitude: ${values.longitude}</p>
                </div > `;
            });
            document.getElementById("card").innerHTML = data1;

        })
        .catch((err) => {
            console.log(err);
        })
}








// function GetInfo() {
//     var newName = document.getElementById("userInput");
//     var cityName = document.getElementById("cityName");
//     fetch("https://api.openbrewerydb.org/breweries?by_city=" + newName.value + "&per_page=100")
//         .then(function (response) {
//             return response.json();
//         })
//         .then(function (data) {
//             console.log(data)
//             getBrewList(data);
//         });
// }
// getBrewList = (BreweryData) => {
//     var brewName = []
//     var brewType = []
//     var brewPhone = []
//     var brewUrl = []
//     var brewStreet = []
//     var brewCity = []
//     var brewState = []
//     var brewPostal = []
//     var brewLat = []
//     var brewLon = []

//     for (let index = 0; index < BreweryData.length; index++) {
//         brewName.push(BreweryData[index].name);
//     }
//     for (let index = 0; index < BreweryData.length; index++) {
//         brewType.push(BreweryData[index].brewery_type);
//     }
//     for (let index = 0; index < BreweryData.length; index++) {
//         brewPhone.push(BreweryData[index].phone);
//     }
//     for (let index = 0; index < BreweryData.length; index++) {
//         brewUrl.push(BreweryData[index].website_url);
//     }
//     for (let index = 0; index < BreweryData.length; index++) {
//         brewStreet.push(BreweryData[index].street);
//     }
//     for (let index = 0; index < BreweryData.length; index++) {
//         brewCity.push(BreweryData[index].city);
//     }
//     for (let index = 0; index < BreweryData.length; index++) {
//         brewState.push(BreweryData[index].state);
//     }
//     for (let index = 0; index < BreweryData.length; index++) {
//         brewPostal.push(BreweryData[index].postal_code);
//     }
//     for (let index = 0; index < BreweryData.length; index++) {
//         brewLat.push(BreweryData[index].latitude);
//     }
//     for (let index = 0; index < BreweryData.length; index++) {
//         brewLon.push(BreweryData[index].longitude);
//     }
//     console.log(brewName);
//     console.log(brewType);
//     console.log(brewPhone);
//     console.log(brewUrl);
//     console.log(brewStreet);
//     console.log(brewCity);
//     console.log(brewState);
//     console.log(brewPostal);
//     console.log(brewLon);
//     console.log(brewLat);
// };

//User opens webpage and sees a welcome prompt telling users how to use the page
//User types name of the city into the search
//If they don't type a city name they get prompted to type a correct city
//If they do type a city name they are presented with the names of local Breweries
//Then user sees a list breweries
//Then the user is prompted if they would like an uber to pick them up and take them to that location
//If they say no, then return to the list of breweries
// If they say yes, then uber pops up with the location of the brewery you are going to