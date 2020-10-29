// React
import React from "react";
// Leaflet
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// Components
import Markers from "./Markers";

const MapView = () => {
  // Vancouver { lat: "49.281643", lng: "-123.114309" }
  // Calgary { lat: "51.042913", lng: "-114.067616" }

  return (
    <Map center={{ lat: "51.042913", lng: "-114.067616" }} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers />
    </Map>
  );
};

export default MapView;
