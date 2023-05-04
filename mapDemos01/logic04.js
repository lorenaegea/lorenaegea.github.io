// can also use setview to chain the initialization together
var myMap = L.map("map").setView([33.7488, -84.3877], 10);

// add the initial tile layer to the map
// use L.tileLayer(tileattributes)
// .addTo(mapObject)
L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
    attribution: '&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
}).addTo(myMap);

// add a marker to the map
var marker = L.marker(
    [33.7488, -84.3877],
    {
        title: "Hello From Atlanta, GA, USA!" //hoverable text
    }
).addTo(myMap);

// add a popup to the marker - makes the marker clickable
marker.bindPopup("Hello From Atlanta, GA, USA!");

// draw a circle around GA Tech - 33.7756° N, 84.3963° W
// use L.circle
L.circle(
    [33.7756, -84.3963],
    {
        color: "black",
        fillColor: "yellow",
        radius: 200,
        fillOpacity: 0.80
    }
).bindPopup("Hello From GA Tech!")
.addTo(myMap);

// draw a rectangle starting at Ponce City Market - 33.7728° N, 84.3656° W
// use L.rectangle()
L.rectangle(
    [
        // specify the start and end of the rectangle
        [33.7738, -84.3636],
        [33.7718, -84.3676]
    ],
    {
        color: "black",
        fillColor: "red",
        stroke: true,
        fillOpacity: 0.80
    }
).bindPopup("Hello From Ponce City Market!")
.addTo(myMap);

// use a polyline to draw a line from Mercedes Benz Stadium - 33.7553° N, 84.4006° W -
// to State Farm Arena - 33.7573° N, 84.3963° W
L.polyline([
    [33.7553, -84.4006],
    [33.7573, -84.3963]
],
    {
        color: "purple"
    }
).addTo(myMap)

// draw a polygon around Chateau Elan - 34.1018° N, 83.8177° W
// use L.polygon() to draw a rectangle
L.polygon(
    [  
        [34.1018, -83.8177],
        [34.0988, -83.8177],
        [34.0988, -83.8137]
    ],
    {
        color: "black",
        fillColor: "orange",
        fillOpacity: 0.80
    }
)
.bindPopup("Traingle near-ish Cheateau Elan")
.addTo(myMap)