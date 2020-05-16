'use strict';


var mymap = L.map('mapid', {
  crs: L.CRS.Simple
}).setView([0, 0], 1);

mymap.setMaxBounds(new L.LatLngBounds([-0.5,-0.5], [6144,8192]));
mymap.setMinZoom(-2);

var imageUrl = './map-test-tile.jpg'
var imageBounds = [[0,0], [6144,8192]];

L.imageOverlay(imageUrl, imageBounds).addTo(mymap);

// var mymap = L.map('mapid').setView([-22.90309921448796, -43.12773227691651], 15);
// L.tileLayer('./map-test-tile.jpg').addTo(mymap);



// L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token={accessToken}', {
//   attribution: 'Map data &copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors, <a href="https://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>',
//   maxZoom: 18,
//   id: 'mapbox.satellite',
//   accessToken: 'pk.eyJ1IjoiZGFuaWxvc2ljIiwiYSI6ImNrMW54OHY5cTBnOXUzbXEzazRxZzg4dXAifQ.dwMFsKzaU7RHsPKcD4aPgA'
// }).addTo(mymap);

INITIALFUNTION();