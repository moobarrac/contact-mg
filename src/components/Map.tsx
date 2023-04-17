// Importing required modules and hooks
import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'leaflet';
import 'leaflet/dist/leaflet.css';
import markerIcon from 'leaflet/dist/images/marker-icon.png';
import markerShadow from 'leaflet/dist/images/marker-shadow.png';
import { useCountryData } from '../hooks/useCountryData';

// create default icon using Leaflet's L.icon method
const defaultIcon = L.icon({
  iconUrl: markerIcon, // marker icon URL
  shadowUrl: markerShadow, // marker shadow URL
  iconSize: [25, 41], // icon size
  iconAnchor: [12, 41], // icon anchor point
});

const Map = () => {
  // call custom hook to fetch data
  const { data } = useCountryData(); 

  // Rendering the JSX
  return (
    <div className="p-4 md:p-8">
      {data && (
        // render MapContainer only if data is available
        <MapContainer
          center={[20, 78]} // set initial map center
          zoom={3.5} // set initial map zoom level
          style={{ height: '80vh', width: '100%' }}
        >
          <TileLayer url="https://tiles.stadiamaps.com/tiles/alidade_smooth_dark/{z}/{x}/{y}{r}.png" />
          {data.map((country: any) => ( 
            // loop through data and create Marker and Popup components for each country
            <Marker
              key={country.countryInfo._id}
              position={[country.countryInfo.lat, country.countryInfo.long]}
              icon={defaultIcon}
            >
              <Popup>
                <div className="bg-white p-2 rounded-md shadow-lg">
                  <h2 className="font-bold text-lg">{country.country}</h2>
                  <p className="mt-2">Active cases: {country.active}</p>
                  <p>Recovered cases: {country.recovered}</p>
                  <p>Deaths: {country.deaths}</p>
                </div>
              </Popup>
            </Marker>
          ))}
        </MapContainer>
      )}
    </div>
  );
};

export default Map; // export Map component for use in other parts of the application
