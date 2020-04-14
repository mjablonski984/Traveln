import React from 'react';
import { Link } from 'react-router-dom';
import PropTypes from 'prop-types';

const PlaceItem = (props) => {
  const place = props.place.venue;
  const img = place.categories[0].icon;
  const imgSrc = `${img.prefix}bg_64${img.suffix}`;

  const placeCoords = `${place.location.lat},${place.location.lng}`;
  return (
    <div className="card">
      <h2>{place.name.length > 33 ? place.name.slice(0, 30) + '...' : place.name}</h2>
      <img src={imgSrc} alt={place.categories[0].name} />
      <h3>Category:</h3>
      <p>{place.categories[0].name}</p>
      <h3>Address:</h3>
      <p>{place.location.address}</p>
      <p>{place.location.city}</p>
      <div>
        <Link to={`/${placeCoords}/${place.name}`} className="btn dark ">
          More
        </Link>
      </div>
    </div>
  );
};

PlaceItem.propTypes = {
  place: PropTypes.object.isRequired
};

export default PlaceItem;
