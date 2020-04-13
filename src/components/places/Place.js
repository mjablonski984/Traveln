import React, { useContext, useEffect } from 'react';
import { Link } from 'react-router-dom';
import PlacesContext from '../../context/places/placesContext';
import PlaceMap from './PlaceMap';
import Loader from '../layout/Loader';

const PlaceDetail = ({ match }) => {
  const placesContext = useContext(PlacesContext);
  const { place, getPlace, loading } = placesContext;

  useEffect(() => {
    getPlace(match.params.place, match.params.name);
    // eslint-disable-next-line
  }, []);

  if (loading) return <Loader />;

  if (place) {
    const { name, location, categories } = place;

    console.log(place);
    return (
      <div className="place-container">
        <div className="place-section">
          <Link to="/" className="btn light">
            Back To Search
          </Link>
          <h2>{name}</h2>

          <img
            src={categories && `${categories[0].icon.prefix}bg_64${categories[0].icon.suffix}`}
            alt={categories && categories[0].name}
          />
          <h3>Category:</h3>
          <p>{categories && categories[0].name}</p>
          <h3>Address:</h3>
          <p>{location && location.formattedAddress[0]}</p>
          <p>{location && location.formattedAddress[1]}</p>
          <p>{location && location.state}</p>
          <p>{location && location.formattedAddress[2]}</p>
          <h3>Coordinates:</h3>
          <p>{location && 'Latitude ' + location.lat.toFixed(4)}</p>
          <p>{location && 'Longitude ' + location.lng.toFixed(4)}</p>
        </div>
        <div className="place-section">
          {location ? (
            <PlaceMap lat={location.lat} lng={location.lng} name={name} />
          ) : (
            <Loader />
          )}
        </div>
      </div>
    );
  }
};

export default PlaceDetail;
