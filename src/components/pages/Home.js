import React, { Fragment } from 'react';
import Search from '../search/Search';
import PlacesList from '../places/PlacesList';
import Weather from '../weather/Weather';

const Home = () => {
  return (
    <Fragment>
      <div className="search-container">
        <Search />
        <Weather />
      </div>
      <PlacesList />
    </Fragment>
  );
};

export default Home;
