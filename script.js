var cityBtn = document.getElementById('cityBtn');
var breweryApi = "https://api.openbrewerydb.org/breweries?by_city=san_diego&per_page=3";
var brewLocation = document.getElementById('breweryLoc').value;
const options = {
	method: 'GET',
	headers: {
		city:'Orlando'
        
	}
};

function getApi(breweryApi) {
fetch(breweryApi, options)
	.then(response => response.json())
	.then(response => console.log(response))
	.catch(err => console.error(err));
}
console.log(breweryApi);

cityBtn.addEventListener("click", getApi);
console.log("the button works");
