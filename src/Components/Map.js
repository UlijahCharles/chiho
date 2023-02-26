import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import { Icon } from "leaflet";
import "./map.css";

const Map = (props) => {
  const position = [55.76118, 37.63576];

  return (
    <MapContainer center={position} zoom={18} scrollWheelZoom={false}>
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={position}>
        <Popup>
          <span>Noodle Shop Chiho</span> <br /> Tiny, hip haunt <br /> with
          Chinese dishes
        </Popup>
      </Marker>
    </MapContainer>
  );
};

export default Map;
