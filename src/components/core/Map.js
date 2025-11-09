// src/components/AlbaniaMap.js
import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";

import "leaflet/dist/leaflet.css";

// Fix default marker icon issue in React
delete L.Icon.Default.prototype._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl:
    "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon-2x.png",
  iconUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-icon.png",
  shadowUrl: "https://unpkg.com/leaflet@1.9.3/dist/images/marker-shadow.png",
});

const attractions = [
  { name: "Tirana – Skanderbeg Square", lat: 41.3275, lng: 19.8189 },
  { name: "Berat – UNESCO Old Town", lat: 40.7056, lng: 19.9526 },
  { name: "Gjirokastër – Castle & Old Bazaar", lat: 40.0758, lng: 20.1384 },
  { name: "Ksamil – Beaches", lat: 39.7683, lng: 19.9995 },
  { name: "Theth – National Park", lat: 42.3953, lng: 19.7743 },
  { name: "Shkodër – Rozafa Castle", lat: 42.0683, lng: 19.5126 },
];

const AlbaniaMap = () => {
  return (
<div className=" h-[500px] rounded-3xl overflow-hidden shadow-2xl">
      <MapContainer
        center={[41.1533, 20.1683]} // center of Albania
        zoom={7}
        style={{ width: "100%", height: "100%" }}
      >
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        {attractions.map((place, index) => (
          <Marker key={index} position={[place.lat, place.lng]}>
            <Popup>{place.name}</Popup>
          </Marker>
        ))}
      </MapContainer>
    </div>
  );
};

export default AlbaniaMap;
