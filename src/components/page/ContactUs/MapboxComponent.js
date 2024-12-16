import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';


const MapboxComponent = () => {
    const [viewport, setViewport] = useState({
        latitude: 28.40210377028585,
        longitude: 77.06037752131253,
        zoom: 16,
        width: '100%',  // Full width
        height: '400px',  // Ensure map has height
    });

    const [address, setAddress] = useState('Fetching address...');
    const MAPBOX_TOKEN = 'pk.eyJ1Ijoic2hpcGVhc2UiLCJhIjoiY200cXB6bHNnMTVtdzJucXM0eHZzMmowdiJ9.AQ2QkqcZGVxp_CqNXtw3uA';

    useEffect(() => {
        // Reverse Geocoding API request
        const fetchAddress = async () => {
            try {
                const response = await fetch(
                    `https://api.mapbox.com/geocoding/v5/mapbox.places/${viewport.longitude},${viewport.latitude}.json?access_token=${MAPBOX_TOKEN}`
                );
                const data = await response.json();
                if (data.features && data.features.length > 0) {
                    setAddress(data.features[0].place_name); // Set the most relevant address
                } else {
                    setAddress('Address not found');
                }
            } catch (error) {
                setAddress('Error fetching address');
                console.error('Reverse Geocoding Error:', error);
            }
        };

        fetchAddress();
    }, [viewport.latitude, viewport.longitude, MAPBOX_TOKEN]); // Re-fetch address when coordinates change



    return (
        <ReactMapGL
            {...viewport}
            mapboxApiAccessToken={MAPBOX_TOKEN}
            onViewportChange={(nextViewport) => setViewport(nextViewport)}
            mapStyle="mapbox://styles/mapbox/streets-v11"
            className="map-container"
        >
            <div
                style={{
                    background: 'white',
                    padding: '5px 10px',
                    borderRadius: '8px',
                    boxShadow: '0 2px 6px rgba(0,0,0,0.2)',
                    fontSize: '12px',
                    textAlign: 'center',
                    marginBottom: '5px',
                    position: 'absolute',
                    width: '50%',
                    top: '10%',
                    left: '10%'
                }}
            >
                <strong>Shipease Technologies Pvt. Ltd.</strong><br />
                {address}
            </div>
            {/* Place a Marker at the specified latitude and longitude */}
            <Marker latitude={28.40202} longitude={77.060888}>
                <div style={{ fontSize: '30px', color: 'red' }}>📍</div>
            </Marker>
            <div style={{ position: 'absolute', right: 50, top: 10 }}>
                <NavigationControl />
            </div>
        </ReactMapGL>

    );
};

export default MapboxComponent;
