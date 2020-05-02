import React, { useState, useContext } from 'react';
import PlacesContext from '../../context/places/placesContext';
import WeatherContext from '../../context/weather/weatherContext';

const Search = () => {
  const placesContext = useContext(PlacesContext);
  const weatherContext = useContext(WeatherContext);

  const [text, setText] = useState('');
  const [section, setSection] = useState('trending');

  const selectSections = {
    Arts: 'arts',
    Food: 'food',
    Outdoors: 'outdoors',
    Shops: 'shops',
    Sight: 'sight',
    Trending: 'trending'
  };

  const onChange = e => setText(e.target.value);

  const onSubmit = e => {
    e.preventDefault();

    if (text === '') {
      return;
    } else {
      placesContext.searchPlaces(text, section);
      weatherContext.getWeather(text);
    }
  };

  const clear = () => {
    placesContext.clearPlaces();
    weatherContext.clearWeather();
    setText('');
  };

  const renderSections = () => {
    return Object.keys(selectSections).map(prop => {
      return (
        <li
          key={selectSections[prop]}
          className={selectSections[prop] === section ? 'selected ' : ''}
          onClick={() => setSection(selectSections[prop])}
        >
          {selectSections[prop]}
        </li>
      );
    });
  };
  return (
    <form className="search-form" onSubmit={onSubmit}>
      <ul className="search-options">{renderSections()}</ul>

      <input
        type="text"
        name="text"
        value={text}
        onChange={onChange}
        onFocus={() => setText('')}
        placeholder="Search..."
      />

      <input type="submit" value="Search" className="btn dark btn-form" />

      {placesContext.places.length > 0 && (
        <input type="button" className="btn light btn-form" value={'Clear'} onClick={clear} />
      )}
    </form>
  );
};

export default Search;
