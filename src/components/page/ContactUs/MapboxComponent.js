import React, { useEffect, useState } from 'react';
import ReactMapGL, { Marker, NavigationControl } from 'react-map-gl';
import mapboxgl from 'mapbox-gl';


const MapboxComponent = () => {

    const [screenWidth, setscreenWidth] = useState(window.innerWidth);

    const updateWidth = () => setscreenWidth(window.innerWidth);

    useEffect(() => {
        window.addEventListener('resize', updateWidth);
        return () => window.removeEventListener('resize', updateWidth);
    }, [])


    const [viewport, setViewport] = useState({
        latitude: 22.75115,
        longitude: 75.89555,
        zoom: 16,
        width: '100%',  // Full width
        height: screenWidth > 600 ? '800px' : '400px',  // Ensure map has height
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
                    background: 'rgba(15, 23, 42, 0.92)',
                    padding: '10px 14px',
                    borderRadius: '10px',
                    boxShadow: '0 4px 14px rgba(0,0,0,0.35)',
                    fontSize: '12px',
                    lineHeight: '1.5',
                    textAlign: 'center',
                    position: 'absolute',
                    maxWidth: '260px',
                    width: 'max-content',
                    top: '10px',
                    left: '10px',
                    zIndex: 5,
                    color: '#FFFFFF',
                    border: '1px solid rgba(255,255,255,0.1)',
                }}
            >
                <strong>NEXSHYP TECHNOLOGIES PVT. LTD.</strong><br />
                Plot No. B1, PU 4, Scheme No. 54, Vijay Nagar Square, AB Rd, Vijay Nagar, Indore, Madhya Pradesh 452010
            </div>
            {/* Place a Marker at the specified latitude and longitude */}
            <Marker latitude={22.75115} longitude={75.89555}>
                <div style={{ fontSize: '30px', color: 'red' }}>📍</div>
            </Marker>
            <div style={{ position: 'absolute', right: 50, top: 10 }}>
                <NavigationControl />
            </div>
        </ReactMapGL>

    );
};

export default MapboxComponent;