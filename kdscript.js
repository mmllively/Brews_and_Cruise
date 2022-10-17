var chosenBreweryDetails = {
    street: "",
    city: "",
    state: "",
    postal_code: "",
    //other details you may need
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
                if (values.latitude !== null || values.longitude !== null) {
                    data1 += `<div class="card">
              <h3 class="title">  ${values.name}  <button id="favorite" onclick="saveFavorites()"
              <i class="fa-solid fa-beer-mug-empty"></i></button></h3 >
              <p class="phone">${values.phone}</p>
              <p class="brewerytype"><b>Brewery Type:</b> ${values.brewery_type}</p>
              <a class="websiteurl"  href=${values.website_url} >${values.website_url}</a>
              <p class="address">${values.street}</p>
              <p class="city">${values.city}, ${values.state}  ${values.postal_code}</p>
              <button class="mapBtn" data-lon=${values.longitude} data-lat=${values.latitude}>Directions</button>
              </div > `;
                }
            });
            document.getElementById("card").innerHTML = data1;

            document.getElementById("card").innerHTML = data1;
            document.getElementById("map", "brewMap").classList.remove("hide");


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



function initMap() {
    //Map options

    //New map
    var map = new google.maps.Map(document.getElementById("map"), {
        zoom: 8,
        center: { lat: 42.3601, lng: -71.0589 },
        mapID: 'b97d8f64f7d407f6',

    });
    console.log(mapID);

};
console.log(map);
initMap();

var service = new google.maps.places.PlacesService(map);

service.findPlaceFromQuery(request, function (results, status) {
    if (status === google.maps.places.PlacesServiceStatus.OK) {
        for (var i = 0; i < results.length; i++) {
            createMarker(results[i]);
        }
        map.setCenter(results[0].geometry.location);
    }
});
