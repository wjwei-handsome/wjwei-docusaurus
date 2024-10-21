import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { ComposableMap, Geographies, Geography, Graticule, Line } from "react-simple-maps"

const geoUrl =
    "https://cdn.jsdelivr.net/npm/world-atlas@2/countries-110m.json"

export default function MapChart() {
    const [ip, setIp] = useState('');
    const [location, setLocation] = useState({ latitude: 0, longitude: 0 });

    useEffect(() => {
        // Fetch the IP address
        const fetchIp = async () => {
            try {
                const response = await axios.get('https://api.ipify.org?format=json');
                setIp(response.data.ip);
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching the IP address:', error);
            }
        };

        fetchIp();
    }, []);

    useEffect(() => {
        // Fetch the location
        const fetchLocation = async () => {
            try {
                const response = await axios.get(`http://ip-api.com/json/${ip}?fields=lat,lon`);
                setLocation({ latitude: response.data.lat, longitude: response.data.lon });
                console.log(response.data);
            } catch (error) {
                console.error('Error fetching the location:', error);
            }
        };

        if (ip) {
            fetchLocation();
        }
    }, [ip]);

    return (
        <ComposableMap projection="geoAzimuthalEqualArea" projectionConfig={{
            scale: 200,
            rotate: [-90, -30, 0],
            center: [0, 0]
        }}>
            <Graticule stroke="#DDD" />
            <Geographies geography={geoUrl}>
                {({ geographies }) =>
                    geographies.map((geo) => (
                        <Geography key={geo.rsmKey} geography={geo} fill="#FFFFFF"
                            stroke="#000000" />
                    ))
                }
            </Geographies>
            <Line
                to={[120.153576, 30.287459]}
                from={[location.latitude, location.longitude]}
                stroke="#FF5533"
                strokeWidth={4}
                strokeLinecap="round"
            />
        </ComposableMap>
    )
}
