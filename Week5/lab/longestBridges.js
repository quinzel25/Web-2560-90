
// these are the coordinates for the center of the US mainland
let usaCenterCoordinates = [39.8282, -98.5795];
// this zoom allos the user to see the the country with oceans on both sides
let zoomLevel = 3.4;

// initial zoom and location
let map = L.map('bridges-map').setView(usaCenterCoordinates, zoomLevel);
// this links to the map
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicXVpbnplbDI1IiwiYSI6ImNrNmxpZWRsYzBkOWczbHFwbHBqd2xmNDAifQ.BEIeaJrSxZGcyhJ04pRH7w'
}).addTo(map);

// this object array holds the data
let bridges = [
    {'name' : 'Verrazano-Narrows Bridge', 'cityState': 'New York, NY', 'span': '1298.4', 'coordinates':[40.6066, -74.0447]},
    {'name' : 'Golden Gate Bridge', 'cityState': 'San Francisco and Marin, CA', 'span': '1280.2', 'coordinates':[37.8199, -122.4783]},
    {'name' : 'Mackinac Bridge', 'cityState': 'Mackinaw and St Ignace, MI', 'span': '1158.0', 'coordinates':[45.8174, -84.7278]},
    {'name' : 'George Washington Bridge', 'cityState': 'New York, NY and New Jersey, NJ', 'span': '1067.0', 'coordinates':[40.8517, -73.9527]},
    {'name' : 'Tacoma Narrows Bridge', 'cityState': 'Tacoma and Kitsap, WA', 'span': '853.44', 'coordinates':[47.2690, -122.5517]},
];

// initailizes the bridge icon variable
var bridgeIcon = L.icon({
    iconUrl: 'bridge.png',
    iconSize:     [25, 25], // size of the icon

});

// this loop
bridges.forEach(function (i) {

    let coordinates = i['coordinates'];
    let marker = L.marker(coordinates, {icon: bridgeIcon})
        .bindPopup(`<b>${i['name']}</b> <br> Location: ${i['cityState']} <br> Span: ${i['span']} meters `).addTo(map);


});


var canvas = document.querySelector('#bridges-chart');
console.log(canvas);
var ctx = canvas.getContext('2d');


// empty lists
let bridgeName = [];
let bridgeSpan = [];

// grabs the name in the data set and pushes it into the empty list
bridges.forEach(function (n){
  bridgeName.push(n.name);
});
// grabs the span in the data set and pushes it into the empty list
bridges.forEach(function (m) {
    bridgeSpan.push(m.span)
});

chart = new Chart(ctx, {
    type: 'bar',
    data: {

        // calls the list created above
        labels : bridgeName,
        datasets: [{
            label: 'Bridge Length (in meters)',

            // calls the list created above
            data: bridgeSpan,
            backgroundColor: ['red', 'blue', 'yellow', 'green', 'purple']
        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    beginAtZero: true
                }
            }]
        }
    }



    });











