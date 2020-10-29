// React
import React from "react";
// Leaflet
import { Marker } from "react-leaflet";
// Components
import IconLocation from "./IconLocation";
// Assets
import { places } from "../assets/coords.json";

const Markers = ({ places }) => {
  return (
    <>
      {places.map((place, i) => (
        <Marker position={place.geometry} icon={IconLocation} key={i} />
      ))}
    </>
  );
};

export default Markers;
