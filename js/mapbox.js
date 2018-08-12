document.write(`\
<div class=" col-md-10 contact-map-right">
  <script          src='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v2.3.0/mapbox-gl-geocoder.min.js'>
  </script>
  <link rel='stylesheet' href='https://api.mapbox.com/mapbox-gl-js/plugins/mapbox-gl-geocoder/v2.3.0/mapbox-gl-geocoder.css' type='text/css' />

  <style>
    .mapboxgl-popup {
        max-width: 400px;
        font: 16px 'Oswald', Helvetica, sans-serif;
    }
    .mapboxgl-popup strong {
       color: #00bdbd;
    }
  </style>

  <div id='map'></div>
  <script>
  mapboxgl.accessToken = 'pk.eyJ1IjoicGFua3RpcDE1IiwiYSI6ImNqa2g4eHB4dDA0bzczcXFxODloaDVpemgifQ._UlqK-ylyII0g8cVZpKiNg';
  let map = new mapboxgl.Map({
  container: 'map',
  center: [-73.984, 40.696],
  zoom: 7,
  style: 'mapbox://styles/mapbox/dark-v9'
  });

  new mapboxgl.Marker()
  .setLngLat([-73.984, 40.696])
  .addTo(map);

  map.addControl(new MapboxGeocoder({
  accessToken: mapboxgl.accessToken
  }));

  map.on('load', function() {

    // Add a layer showing the places.
    map.addLayer({
        "id": "places",
        "type": "symbol",
        "source": {
            "type": "geojson",
            "data": {
                "type": "FeatureCollection",
                "features": [{
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Silman</strong><p>Worked as a Structural Engineer at this amazing firm.</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-74.0080, 40.7040]
                    },
                }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Fullstack Academy</strong><p>Got my software engineering knowledge!</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-74.009, 40.705]
                    },
                  }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Temple University</strong><p>Bachelors of Science in Architecture</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-75.158, 39.983]
                    },
                  }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Lehigh University</strong><p>Masters of Engineering in Structural Engineering</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-75.378, 40.607]
                    },
                  }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>AECOM</strong><p>Strucural Engineer: Designed bridges and catenary cables</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-75.169, 39.952]
                    },
                  }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Daniel Ebner Architects</strong><p>Headed architectural design and interior design for Residential, Commercial & Educational Projects</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-75.468, 40.602]
                    }
                  }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Art of Living Retreat Center</strong><p>My absolute favorite place to decompress & destress</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-81.585, 36.175]
                    }
                  }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Moustache Pitza</strong><p>Amazing middle easter food</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-74.005, 40.732]
                    }
                  }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Giodarno's</strong><p>Chicago style pizza anyone?/p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-74.005, 40.732]
                    }
                  }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Meske</strong><p>Ever tried Ethiopian food? This is the spot!</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-74.992, 40.662]
                    }
                  }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Mini Vacation</strong><p>One of my favourite mini vacation spot.</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [-106.944, 39.209]
                    }
                  }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Hometown</strong><p>Spent my childhood in this busy city</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [72.795, 18.944]
                    }
                  }, {
                    "type": "Feature",
                    "properties": {
                        "description": "<strong>Jignesh Doshi Architects</strong><p>Did my summer internship as an Architect</p>",
                        "icon": "marker"
                    },
                    "geometry": {
                        "type": "Point",
                        "coordinates": [72.86, 19.02]
                    }
                }]
            }
        },
        "layout": {
            "icon-image": "{icon}-15",
            "icon-allow-overlap": true,
            "icon-size":1.5,
        }
    });

    // Create a popup, but don't add it to the map yet.
    var popup = new mapboxgl.Popup({
        closeButton: false,
        closeOnClick: false
    });

    map.on('mouseenter', 'places', function(e) {
        // Change the cursor style as a UI indicator.
        map.getCanvas().style.cursor = 'pointer';

        var coordinates = e.features[0].geometry.coordinates.slice();
        var description = e.features[0].properties.description;

        // Ensure that if the map is zoomed out such that multiple
        // copies of the feature are visible, the popup appears
        // over the copy being pointed to.
        while (Math.abs(e.lngLat.lng - coordinates[0]) > 180) {
            coordinates[0] += e.lngLat.lng > coordinates[0] ? 360 : -360;
        }

        // Populate the popup and set its coordinates
        // based on the feature found.
        popup.setLngLat(coordinates)
            .setHTML(description)
            .addTo(map);
    });

    map.on('mouseleave', 'places', function() {
        map.getCanvas().style.cursor = '';
        popup.remove();
    });
});
  </script>
</div>
\
`);
