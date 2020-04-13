import React, { useContext } from 'react';
import PlaceItem from './PlaceItem';
import PlacesContext from '../../context/places/placesContext';
import Loader from '../layout/Loader';

const PlacesList = () => {
  const placesContext = useContext(PlacesContext);
  const { places, loading } = placesContext;

  if (loading) {
    return <Loader />;
  } else {
    return (
      <div className="card-list">
        {places.map((place) => (
          <PlaceItem key={place.venue.id} place={place} />
        ))}
      </div>
    );
  }
};

export default PlacesList;
