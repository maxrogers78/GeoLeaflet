// React
import React, { useEffect, useState } from "react";
// Router
import { Link } from "react-router-dom";

const Home = () => {
  const [coords, setCoords] = useState({
    longitude: 0,
    latitude: 0,
  });

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      function (position) {
        setCoords({
          longitude: position.coords.longitude,
          latitude: position.coords.latitude,
        });
      },
      function (error) {
        console.log(error);
      },
      { enableHighAccuracy: true }
    );
  }, []);

  return (
    <div>
      <h1>Geolocation</h1>
      <p>longitude: {coords.longitude}</p>
      <p>latitule: {coords.latitude}</p>

      <Link to={{ pathname: "/map", state: coords }}>See my location</Link>
    </div>
  );
};

export default Home;
