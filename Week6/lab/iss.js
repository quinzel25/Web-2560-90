// grabs the api address and puts it in a variable
let url = 'https://api.wheretheiss.at/v1/satellites/25544';

// grabs the span tags on the HTML page so we can update them later
let issLat = document.querySelector('#iss-lat');
let issLong = document.querySelector('#iss-long');
let issDate = document.querySelector('#iss-date');

// sets up variable and time interval
let issMarker;
let update = 10000;

// initializes the bridge icon variable
var issIcon = L.icon({
    iconUrl: 'iss.png',
    iconSize: [25, 25] // size of the icon
});
// initial zoom and location
let map = L.map('iss-map').setView([0,0],1);
// this links to the map
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicXVpbnplbDI1IiwiYSI6ImNrNmxpZWRsYzBkOWczbHFwbHBqd2xmNDAifQ.BEIeaJrSxZGcyhJ04pRH7w'
}).addTo(map);


// calls the iss function
iss();
// calls function ever update (10 seconds)
setInterval(iss, update);

// creates iss function
function iss(attempts) {

   //
    if (attempts <= 0 ) {
        console.log('Too many errors, abandoning requests to get ISS position');
        return
    }

    // fetches the API url
    fetch(url)
        // promise whether its going to pass or fail
        .then(res => res.json())
        // issData is the variable you can use to pull data from the API
        //
        .then(issData => {
            console.log(issData)
            // grabs the latitude from API
            let lat = issData.latitude
            // grabs the longitude from the API
            let long = issData.longitude
            // grabs the date on the local machine
            let date = Date();
            // puts the information on the page
            issLat.innerHTML = lat
            issLong.innerHTML = long
            issDate.innerHTML = date

            if (!issMarker) {
                // creates the iss marker on the map at the current lat an long position AND has custom icon
                issMarker = L.marker([lat, long], {icon: issIcon}).addTo(map) // create the marker
            }
            else {
                issMarker.setLatLng([lat, long])
            }

        })
        // catches any errors part of the first promise
        .catch(err => {
            attempts--
            console.log(err)
        })
        .finally( () => {

            setTimeout(iss,update, attempts)


        })
}
















