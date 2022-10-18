var chosenBreweryDetails = {
  street: "",
  city: "",
  state: "",
  postal_code: "",
  //other details you may need
}

var completeData;

function phoneFormat(input) {
  if (!input || isNaN(input)) return "";
  if (typeof (input) !== 'string') input = input.toString()
  if (input.length === 10) {
    return input.replace(/(\d{3})(\d{3})(\d{4})/, "($1) $2-$3");
  }
  return input;
}

function GetInfo(event) {
  // event.preventDefault();
  var newName = document.getElementById("userInput");
  var cityName = document.getElementById("cityName");

  fetch("https://api.openbrewerydb.org/breweries?by_city=" + newName.value + "&per_page=100")
    .then((data) => {
      return data.json();
    })
    .then((completedata) => {
      let data1 = "";
      completedata.map((values) => {
        var phoneNumber = phoneFormat(values.phone)
        if (values.website_url !== null) {
          data1 += `<div class="card">
            <h3 class="title">  ${values.name}  <button id="favorite" onclick="saveFavorites()"
            <i class="fa-solid fa-beer-mug-empty"></i></button></h3 >
            <p class="address">${values.street || ""}</p>
            <p class="city">${values.city}, ${values.state},  ${values.postal_code}</p>
            <p class="phone">${phoneNumber}</p>
            <p class="brewerytype"><b>Brewery Type:</b> <a class="brewerytypelink" href="./brewerytypes.html#${values.brewery_type}">${values.brewery_type}</a></p>
            <a class="websiteurl"  href=${values.website_url} >${values.website_url}</a>
            <div class="directionsbutton"><button class="mapBtn" data-lon=${values.longitude} data-lat=${values.latitude}>Directions</button></div>
            </div > `;
        }
      });
      document.getElementById("card").innerHTML = data1;

      // document.getElementById("map", "brewMap").classList.remove("hide");


    })
    .catch((err) => {
      console.log(err);
    })

}

//event delegation example when attaching to parents

$(document).on('click', '.mapBtn', function (event) {
  var address = $(this).siblings(".address").text() + " " + $(this).siblings(".city").text()

  localStorage.setItem("chosenBrewery", address);
  document.location.assign("map.html")
  console.log("you clicked the a tag");
}

)




//local storage for saving favorite breweries

function saveFavorites() {
  console.log("did this work?");
  var title = $(this).siblings(".card").val();
  var saved = $(this).parent().attr("id");
  localStorage.setItem(title, saved);
}
// localStorage.setItem("chosenBrewery", JSON.stringify(chosenBreweryDetails.value));



// function initMap() {
//   //Map options

//   //New map
//   var map = new google.maps.Map(document.getElementById("map"), {
//     zoom: 8,
//     center: { lat: 42.3601, lng: -71.0589 },
//     mapID: 'b97d8f64f7d407f6',

//   });
//   console.log(mapID);

// };


// initMap();

// var service = new google.maps.places.PlacesService(map);

// service.findPlaceFromQuery(request, function (results, status) {
//   if (status === google.maps.places.PlacesServiceStatus.OK) {
//     for (var i = 0; i < results.length; i++) {
//       createMarker(results[i]);
//     }
//     map.setCenter(results[0].geometry.location);
//   }
// });

// $(".finder").on("submit", GetInfo)









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
