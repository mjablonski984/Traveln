import React, { useState, useEffect } from 'react';
import { Map, TileLayer, Marker, Popup } from 'react-leaflet';
import PropTypes from 'prop-types';

const PlaceMap = (props) => {
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
            <h3>{props.name}</h3>
          </Popup>
        </Marker>
      </Map>
    </div>
  );
};

PlaceMap.propTypes = {
  lat: PropTypes.number.isRequired,
  lng: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired
};

export default PlaceMap;
