<div id='application' class='modal modal-fixed-footer'><div class='modal-content'><h4>Modal Header</h4><p>A bunch of text</p></div><div class='modal-footer'><a href='#!' class='modal-close waves-effect waves-green btn-flat'>Agree</a></div></div>






// L.mapbox.accessToken = 'pk.eyJ1IjoidGltb3RoeXdhcmRsb3ciLCJhIjoiY2t5dGR3dWwyMWNkbjJ1bzdob3BleG9qOSJ9.RRGAaBwkMg7rbDMY1V5e6A';
// var map = L.mapbox.map('map')
//     .setView([36.1627, -86.7816], 11)
//     .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));

// var myLayer = L.mapbox.featureLayer().addTo(map);

// var geoJSON = [{
//     type: 'Feature',
//     "geometry": {
//         "type": "Point",
//         "coordinates": [36.10, -86.81]
//     },
//     "properties": {
//         "image": "https://images.app.goo.gl/2ngPnoiL4cR81ko79",
//         "url": "https://store.bluebirdcafe.com/",
//         "marker-symbol": "star",
//         "marker-color": "#ff8888",
//         "marker-size": "large",
//         "city": "The Bluebird Cafe"
//     }
// }, {
//     type: 'Feature',
//     "geometry": {
//         "type": "Point",
//         "coordinates": [36.15, -86.77]
//     },
//     "properties": {
//         "image": "https://images.app.goo.gl/T5Uin8P7BhuDSNsv9",
//         "url": "https://www.listeningroomcafe.com/",
//         "marker-symbol": "star",
//         "marker-color": "#ff8888",
//         "marker-size": "large",
//         "city": "Listening Room Cafe"
//     }
// }, {
//     type: 'Feature',
//     "geometry": {
//         "type": "Point",
//         "coordinates": [36.15, -86.80]
//     },
//     "properties": {
//         "image": "https://images.app.goo.gl/iX13Tg7pX42EHVgQ9",
//         "url": "https://exitin.com/",
//         "marker-symbol": "star",
//         "marker-color": "#ff8888",
//         "marker-size": "large",
//         "city": "EXIT/IN"
//     }
// }]

// myLayer.on('layeradd', function(e) {
//     var marker = e.layer,
//         feature = marker.feature;
    
//     var popupContent = 
//     '<a target="_blank" class="popup" href="' + feature.properties.url + '">' +
// '<img src="' + feature.properties.image + '" />' +
// feature.properties.city +
// '</a>';

    
//     marker.bindPopup(popupContent, {
//         closeButton: false,
//         minWidth: 320
//     });
// });

// myLayer.setGeoJSON(geoJSON);


var marker1 = L.marker([36.1021, -86.8169]).addTo(map)
.bindPopup('The Bluebird Cafe');

var marker2 = L.marker([36.1538, -86.7723]).addTo(map)
.bindPopup('Listening Room Cafe');

var marker3 = L.marker([36.1514, -86.8044]).addTo(map)
.bindPopup('EXIT / IN');

L.mapbox.featureLayer({
    type: 'Feature',
    geometry: {
        type: 'Point',
        coordinates: [36.1021, -86.8169]
    }
    ,properties: {
        title: 'The Bluebird Cafe',
        description: '4104 Hillsboro Pike, Nashville, TN 37215',
        'marker-size': 'large',
        'marker-color': '#5CAC31',
        'marker-symbol': 'music'
    }
}).addTo(map);

// The Bluebird Cafe - 36.1021° N, 86.8169° W
// Listening Room Cafe - 36.1538° N, 86.7723° W
// EXIT/IN - 36.1514° N, 86.8044° W
