mapboxgl.accessToken = 'pk.eyJ1IjoiZGllZ29sYWJveSIsImEiOiJjbHdmc2xpYXYxeTZrMmlxa2JlbXVsano5In0.naVYyCxpiFMkxzu23X46DQ';
const map = new mapboxgl.Map({
    container: 'location_map', // container ID
    center: [-66.617772,17.997133], // starting position [lng, lat]
    zoom: 7, // starting zoom
    // pitch: 62, // starting pitch
    // bearing: -20, // starting bearing
    style: 'mapbox://styles/mapbox/standard'
});

map.on('style.load', () => {

    new mapboxgl.Marker({ color: 'green' })
    .setLngLat([-66.617772, 17.997133]) // Marker coordinates
    .addTo(map);

    map.addSource('line', {
        type: 'geojson',
        lineMetrics: true,
        data: {
            type: 'LineString',
            coordinates: [
                [-66.617772,17.997133],
            ]
        }
    });


    map.addLayer({
        id: 'line',
        source: 'line',
        type: 'line',
        paint: {
            'line-width': 12,
            // The `*-emissive-strength` properties control the intensity of light emitted on the source features.
            // To enhance the visibility of a line in darker light presets, increase the value of `line-emissive-strength`.
            'line-emissive-strength': 0.8,
            'line-gradient': [
                'interpolate',
                ['linear'],
                ['line-progress'],
                0,
                'red',
                1,
                'blue'
            ]
        }

    });
    
});

// document
//     .getElementById('lightPreset')
//     .addEventListener('change', function () {
//         map.setConfigProperty('basemap', 'lightPreset', this.value);
//     });

// document
//     .querySelectorAll('.map-overlay-inner input[type="checkbox"]')
//     .forEach((checkbox) => {
//         checkbox.addEventListener('change', function () {
//             map.setConfigProperty('basemap', this.id, this.checked);
//         });
//     });
