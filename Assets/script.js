L.mapbox.accessToken = 'pk.eyJ1IjoidGltb3RoeXdhcmRsb3ciLCJhIjoiY2t5dGR3dWwyMWNkbjJ1bzdob3BleG9qOSJ9.RRGAaBwkMg7rbDMY1V5e6A';
    var map = L.mapbox.map('map')
        .setView([40, -74.50], 9)
        .addLayer(L.mapbox.styleLayer('mapbox://styles/mapbox/streets-v11'));