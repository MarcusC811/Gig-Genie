<<<<<<< HEAD
// var submitButton = document.getElementById('subBtn');
// var i = 0;
// mapboxgl.accessToken = 'pk.eyJ1IjoidGltb3RoeXdhcmRsb3ciLCJhIjoiY2t5dGR3dWwyMWNkbjJ1bzdob3BleG9qOSJ9.RRGAaBwkMg7rbDMY1V5e6A';
// const map = new mapboxgl.Map({
//     container: 'map',
//     // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
//     style: 'mapbox://styles/mapbox/streets-v11',
//     center: [-85.3094, 35.0458],
//     zoom: 5
//     });

//     const marker1 = new mapboxgl.Marker()
//     .setLngLat([-86.7905, 33.5054])
//     .setPopup(new mapboxgl.Popup().setHTML("<p>The Nick - Birmingham, AL</p>"))
//     .addTo(map); 

//     const marker2 = new mapboxgl.Marker()
//     .setLngLat([-86.8169, 36.1021])
//     .setPopup(new mapboxgl.Popup().setHTML("<p>The Bluebird Cafe - Nashville, TN</p>"))
//     .addTo(map);

//     const marker3 = new mapboxgl.Marker()
//     .setLngLat([-84.3688, 33.7976])
//     .setPopup(new mapboxgl.Popup().setHTML("<p>Smith's Olde Bar - Atlanta, GA</p>"))
//     .addTo(map);
 
// /* Given a query in the form "lng, lat" or "lat, lng"
// * returns the matching geographic coordinate(s)
// * as search results in carmen geojson format,
// * https://github.com/mapbox/carmen/blob/master/carmen-geojson.md */
//     const coordinatesGeocoder = function (query) {
// // Match anything which looks like
// // decimal degrees coordinate pair.
//         const matches = query.match(
//             /^[ ]*(?:Lat: )?(-?\d+\.?\d*)[, ]+(?:Lng: )?(-?\d+\.?\d*)[ ]*$/i
//         );
//         if (!matches) {
//             return null;
//         }
//         function coordinateFeature(lng, lat) {
//             return {
//             center: [lng, lat],
//             geometry: {
//             type: 'Point',
//             coordinates: [lng, lat]
//             },
//             place_name: 'Lat: ' + lat + ' Lng: ' + lng,
//             place_type: ['coordinate'],
//             properties: {},
//             type: 'Feature'
//             };
//         }
 
//             const coord1 = Number(matches[1]);
//             const coord2 = Number(matches[2]);
//             const geocodes = [];
            
//             if (coord1 < -90 || coord1 > 90) {
//             // must be lng, lat
//             geocodes.push(coordinateFeature(coord1, coord2));
//             }
            
//             if (coord2 < -90 || coord2 > 90) {
//             // must be lat, lng
//             geocodes.push(coordinateFeature(coord2, coord1));
//             }
            
//             if (geocodes.length === 0) {
//             // else could be either lng, lat or lat, lng
//             geocodes.push(coordinateFeature(coord1, coord2));
//             geocodes.push(coordinateFeature(coord2, coord1));
//             }
            
//             return geocodes;
//         };
 
// // Add the control to the map.
//         map.addControl(
//         new MapboxGeocoder({
//         accessToken: mapboxgl.accessToken,
//         localGeocoder: coordinatesGeocoder,
//         zoom: 4,
//         placeholder: 'Search Cities Here',
//         mapboxgl: mapboxgl,
//         reverseGeocode: true
//         })
// );

// // Sending Data to Local Storage with submit btn

// function saveData(event) {
//     const form = document.getElementById('application');
//     event.preventDefault();
//     var artistName = document.getElementById('artist_name').value;
//     var genreName = document.getElementById('Genre').value;
//     var emailIn = document.getElementById('email').value;
//     var locationIn = document.getElementById('location').value;
//     var data = {Name: artistName, Genre: genreName, Email: emailIn, Location: locationIn};
//     localStorage.setItem('Data' + i, JSON.stringify(data));
//     alert("saved");
//     i++;
//     form.reset();
// }

// submitButton.addEventListener("click", saveData);

mapboxgl.accessToken = 'pk.eyJ1IjoidGltb3RoeXdhcmRsb3ciLCJhIjoiY2t5dGR3dWwyMWNkbjJ1bzdob3BleG9qOSJ9.RRGAaBwkMg7rbDMY1V5e6A';
=======
// MATERIALIZE

// calling modal methods
(function($){
  $.fn.leanModal = function(options) {
    if( $('.modal').length > 0 ){
        $('.modal').modal(options);
    }
  };

  $.fn.openModal = function(options) {
    $(this).modal(options);
    $(this).modal('open');
  };

  $.fn.closeModal = function() {
    $(this).modal('close');
  };
})(jQuery);

// Instantializing modal trigger
$(document).ready(function(){
  // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
  $('.modal-trigger').leanModal();
});
// Instantializing form selection triggers
$(document).ready(function(){
  $('select').formSelect();
});
// Instantializing carousel
$('.carousel.carousel-slider').carousel({
  fullWidth: true,
  indicators: true
});




// Local storage logic start
var timeText = document.getElementById('timeText');
var smithsSubmitButton = document.querySelector("#modal3 > div > div > form > div.modal-footer > a");
var nickSubmitBtn = document.querySelector("#modal1 > div > div > form > div.modal-footer > a");
var bbSubmitBtn = document.querySelector("#modal2 > div > div > form > div.modal-footer > a");


  // Sending Data to Local Storage with submit btn

  function smithSaveData(event) {
    const form = document.getElementById('application');
    event.preventDefault();
    const artistName = document.getElementById('artistName').value;
    const genreName = document.getElementById('genreIn').value;
    const emailIn = document.getElementById('emailIn').value;
    const timeSlots = document.getElementById('timeSlots').value;
    const Instrument = document.querySelector("#modal3 > div > div > form > div:nth-child(5) > div > input").value;
    const cb = document.querySelector('#accept');
    const data = {Name: artistName, Genre: genreName, Time: timeSlots, Email: emailIn, Instrument: Instrument};
    localStorage.setItem("Smith's | " + artistName, JSON.stringify(data));
}

function nickSaveData(event) {
  const form = document.getElementById('application');
  event.preventDefault();
  const artistName = document.getElementById('nickArtist').value;
  const genreName = document.getElementById('nickGenre').value;
  const emailIn = document.getElementById('nickEmail').value;
  const timeSlots = document.getElementById('nickTime').value;
  const Instrument = document.querySelector("#modal1 > div > div > form > div:nth-child(5) > div > input").value;
  const cb = document.querySelector('#accept');
  const data = {Name: artistName, Genre: genreName, Time: timeSlots, Email: emailIn, Instrument: Instrument};
  localStorage.setItem('The Nick | ' + artistName, JSON.stringify(data));
}

function bbSaveData(event) {
  const form = document.getElementById('application');
  event.preventDefault();
  const artistName = document.getElementById('bbArtist').value;
  const genreName = document.getElementById('bbGenre').value;
  const emailIn = document.getElementById('bbEmail').value;
  const timeSlots = document.getElementById('bbTime').value;
  const Instrument = document.querySelector("#modal2 > div > div > form > div:nth-child(5) > div > input").value;
  const cb = document.querySelector('#accept');
  const data = {Name: artistName, Genre: genreName, Time: timeSlots, Email: emailIn, Instrument: Instrument};
  localStorage.setItem('The BlueBird | ' + artistName, JSON.stringify(data));
}

smithsSubmitButton.addEventListener('click', smithSaveData)
nickSubmitBtn.addEventListener("click", nickSaveData)
bbSubmitBtn.addEventListener("click", bbSaveData)


  $(document).ready(function(){
    $('.timepicker').timepicker();
  });


// MAPBOX
mapboxgl.accessToken = config.MapboxKey
>>>>>>> 17347d5393a483490e35a392e377f447af462348
const map = new mapboxgl.Map({
    container: 'map',
    // Choose from Mapbox's core styles, or make your own style with Mapbox Studio
    style: 'mapbox://styles/mapbox/streets-v11',
    center: [-85.3094, 35.0458],
    zoom: 5
    });

    const marker1 = new mapboxgl.Marker()
    .setLngLat([-86.7905, 33.5054])
    .setPopup(new mapboxgl.Popup().setHTML("<h6>The Nick</h6><ul><li>2514 10th Ave S, Birmingham, AL 35205</li><li>Open Mics: <ul><li>Monday 7pm-11pm</li><li>Thursday 7pm-11pm</ul></li></ul><!-- Modal Trigger --><a class='waves-effect waves-light btn modal-trigger' href='#modal1'>Sign Up</a>"))
    .addTo(map); 

    const marker2 = new mapboxgl.Marker()
    .setLngLat([-86.8169, 36.1021])
    .setPopup(new mapboxgl.Popup().setHTML("<h6>The Bluebird Cafe</h6><ul><li>4104 Hillsboro Pike, Nashville, TN 37215</li><li>Open Mics: <ul><li>Monday 6pm-10pm</li></ul></li></ul><!-- Modal Trigger --><a class='waves-effect waves-light btn modal-trigger' href='#modal2'>Sign Up</a>"))
    .addTo(map);

    const marker3 = new mapboxgl.Marker()
    .setLngLat([-84.3688, 33.7976])
    .setPopup(new mapboxgl.Popup().setHTML("<h6>Smith's Olde Bar</h6><ul><li>1578 Piedmont Ave NE, Atlanta, GA 30324</li><li>Open Mics: <ul><li>Monday 7pm-12am</li><li>Wednesday 7pm-12am</ul></li></ul><!-- Modal Trigger --><a class='waves-effect waves-light btn modal-trigger' href='#modal3'>Sign Up</a>"))
    .addTo(map);
 
// Below Referenced from Mapbox Docs Examples section
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
 
// Add the search control to the map
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

<<<<<<< HEAD
(function($){
    $.fn.leanModal = function(options) {
      if( $('.modal').length > 0 ){
          $('.modal').modal(options);
      }
    };
  
    $.fn.openModal = function(options) {
      $(this).modal(options);
      $(this).modal('open');
    };
  
    $.fn.closeModal = function() {
      $(this).modal('close');
    };
  })(jQuery);

$(document).ready(function(){
    // the "href" attribute of .modal-trigger must specify the modal ID that wants to be triggered
    $('.modal-trigger').leanModal();
  });

  $(document).ready(function(){
    $('select').formSelect();
  });

  $(document).ready(function(){
    $('.timepicker').timepicker();
  });
=======
// Resize the map when the map container is shown
// after being initially hidden with CSS.
const mapDiv = document.getElementById('map');
if (mapDiv.style.visibility === true) map.resize();


var limit = 3
// referenced from Open Data Melbourne, fit to our needs
$.ajax({
    url: "https://data.melbourne.vic.gov.au/resource/mgqj-necz.json",
    type: "GET",
    data: {
      "$limit" : limit, // results limit
      "$$app_token" : ""
    }
}).done(function(data) {
  //for loop that creates  amount of markers based on API results limit
  for (i=0; i<limit; i++) {
    var vn = data[i].venue_name
    var va = data[i].venue_address

    new mapboxgl.Marker()
      .setLngLat([data[i].lon, data[i].lat])
      .setPopup(new mapboxgl.Popup().setText('Venue: ' + vn + ' |' + ' Address: ' + va))
      .addTo(map);
  }

 });
>>>>>>> 17347d5393a483490e35a392e377f447af462348
