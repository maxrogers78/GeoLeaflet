// React
import React from "react";
// Leaflet
import { Map, TileLayer } from "react-leaflet";
import "leaflet/dist/leaflet.css";
// Components
import Markers from "./Markers";
// Assets
import { places } from "../assets/coords.json";

const MapView = () => {
  return (
    <Map center={{ lat: "52.519873", lng: "13.405055" }} zoom={13}>
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
      />
      <Markers places={places} />
    </Map>
  );
};

export default MapView;
