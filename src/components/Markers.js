// React
import React from "react";
// Leaflet
import { Marker } from "react-leaflet";
import IconLocation from "./IconLocation";

const Markers = () => {
  // Vancouver { lat: "49.281643", lng: "-123.114309" }
  // Calgary { lat: "51.042913", lng: "-114.067616" }

  return (
    <Marker
      position={{ lat: "49.281643", lng: "-123.114309" }}
      icon={IconLocation}
    />
  );
};

export default Markers;
