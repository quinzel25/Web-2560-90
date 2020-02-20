let metroAreaCenterCoordinates = [44.96, -93.2];
let zoomLevel = 9;


let map = L.map('college-map').setView(metroAreaCenterCoordinates, zoomLevel);

L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
    attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery &copy; <a href="https://www.mapbox.com/">Mapbox</a>',
    id: 'mapbox.streets',
    accessToken: 'pk.eyJ1IjoicXVpbnplbDI1IiwiYSI6ImNrNmxpZWRsYzBkOWczbHFwbHBqd2xmNDAifQ.BEIeaJrSxZGcyhJ04pRH7w'
}).addTo(map);

// let mctcCoordinates = [44.9724, -93.2844];
// let mctcMarker = L.marker(mctcCoordinates)
//     .bindPopup("Minneapolis College<br><a href='https://minneapolis.edu'>Website</a>").addTo(map)
// let stPaulCoordinates = [44.94839, -93.1099];
// let stpMarker = L.marker(stPaulCoordinates).bindPopup("Saint Paul College<br><a href='https://saintpaul.edu'>Website</a>")
//     .addTo(map);
//
// let metroAreaCircle = L.circle(metroAreaCenterCoordinates, {
//     color: 'green',
//     radius: 30000,
//     fillOpacity: 0.2
//
// })
// .bindPopup("Twin Cities Metro Area")
// .addTo(map);
//
// let normandaleCoords = [44.8297, -93.3312]
// let normMarker = L.marker(normandaleCoords).bindPopup("Normandale College<br><a href='http://www.normandale.edu'>Website</a>")
// .add(map);
//
let campuses = [
    {'name': 'Minneapolis College', 'website': 'https://minneapolis.edu', 'coordinates': [44.9724, -93.2844] },
    {'name': 'Saint Paul College', 'website': 'https://saintpaul.edu', 'coordinates': [44.94839, -93.1099] },
    {'name': 'Normandale Community College', 'website': 'https://normandale.edu', 'coordinates': [44.8297, -93.3312] },
    {'name': 'North Hennepin Community College', 'website': 'https://nhcc.edu', 'coordinates': [45.1054232,-93.3767558] },
    {'name': 'Century College', 'website': 'https://century.edu', 'coordinates': [45.0438494,-92.9862026] },
];


campuses.forEach(function (i) {

    let coordinates = i['coordinates'];
    let marker = L.marker(coordinates)
        .bindPopup(`${i['name']} <br> <a href="${i['website']}">Website</a>`).addTo(map)


})

// for (let x = 0 ; x < campuses.length ; x++);
//
//     let coords = campuses['coordinates']
//     let name = campuses['name']
//     let website = campuses['website']
//   let marker = L.marker(coords).bindPopup(`${name} <br> ${website}`).add(map)
