import React, { useState } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import { useEffect } from 'react';

const PlaceMap = (props) => {
  console.log(props);
  const [coords, setCoords] = useState({
    lat: 51.5098,
    lng: -0.118
  });

  useEffect(() => {
    if (props.lat && props.lng) {
      setCoords({ lat: props.lat, lng: props.lng });
    }
    // eslint-disable-next-line
  }, []);

  return (
    <div className="map">
      <Map center={[coords.lat, coords.lng]} zoom={16}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={[coords.lat, coords.lng]}>
          <Popup>
            <p>{props.name}</p>
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

export default PlaceMap;
