mapboxgl.accessToken = 'pk.eyJ1IjoidGltb3RoeXdhcmRsb3ciLCJhIjoiY2t5dGR3dWwyMWNkbjJ1bzdob3BleG9qOSJ9.RRGAaBwkMg7rbDMY1V5e6A';
const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-85.3094, 35.0458],
    zoom: 5
    });

    const marker1 = new mapboxgl.Marker()
    .setLngLat([-86.7905, 33.5054])
    .setPopup(new mapboxgl.Popup().setHTML("<p>The Nick - Birmingham, AL</p>"))
    .addTo(map); 

    const marker2 = new mapboxgl.Marker()
    .setLngLat([-86.8169, 36.1021])
    .setPopup(new mapboxgl.Popup().setHTML("<p>The Bluebird Cafe - Nashville, TN</p>"))
    .addTo(map);

    const marker3 = new mapboxgl.Marker()
    .setLngLat([-84.3688, 33.7976])
    .setPopup(new mapboxgl.Popup().setHTML("<p>Smith's Olde Bar - Atlanta, GA</p>"))
    .addTo(map);
 
/* Given a query in the form "lng, lat" or "lat, lng"
* returns the matching geographic coordinate(s)
* as search results in carmen geojson format,
* https://github.com/mapbox/carmen/blob/master/carmen-geojson.md */
    const coordinatesGeocoder = function (query) {
// Match anything which looks like
// decimal degrees coordinate pair.
        const matches = query.match(
            /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
        );
        if (!matches) {
            return null;
        }
        function coordinateFeature(lng, lat) {
            return {
            center: [lng, lat],
            geometry: {
            type: 'Point',
            coordinates: [lng, lat]
            },
            place_name: 'Lat: ' + lat + ' Lng: ' + lng,
            place_type: ['coordinate'],
            properties: {},
            type: 'Feature'
            };
        }
 
            const coord1 = Number(matches[1]);
            const coord2 = Number(matches[2]);
            const geocodes = [];
            
            if (coord1 < -90 || coord1 > 90) {
            // must be lng, lat
            geocodes.push(coordinateFeature(coord1, coord2));
            }
            
            if (coord2 < -90 || coord2 > 90) {
            // must be lat, lng
            geocodes.push(coordinateFeature(coord2, coord1));
            }
            
            if (geocodes.length === 0) {
            // else could be either lng, lat or lat, lng
            geocodes.push(coordinateFeature(coord1, coord2));
            geocodes.push(coordinateFeature(coord2, coord1));
            }
            
            return geocodes;
        };
 
// Add the control to the map.
        map.addControl(
        new MapboxGeocoder({
        accessToken: mapboxgl.accessToken,
        localGeocoder: coordinatesGeocoder,
        zoom: 4,
        placeholder: 'Search Cities Here',
        mapboxgl: mapboxgl,
        reverseGeocode: true
        })
);

// gig dynamic 
var popUp =  document.createElement('div');

popUp.querySelector