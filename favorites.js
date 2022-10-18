let currentStorage = JSON.parse(localStorage.getItem("myFavorite"));

console.log(currentStorage);

let favoriteCard = currentStorage.map((values) => {
    return (`<div class="card" >
    <div class="box">
    <div class="content">
    <h3 class="title">  ${values.name} 
    <p class="address">${values.street}</p>
    <p class="city">${values.city}, ${values.state},  ${values.postal_code}</p>
    </div>
    </div>
    </div >`)
});

document.getElementById("favoriteCard").innerHTML = favoriteCard;