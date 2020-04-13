import React, { useContext } from 'react';
import WeatherContext from '../../context/weather/weatherContext';
import Loader from '../layout/Loader';

const Weather = () => {
  const weatherContext = useContext(WeatherContext);
  const { weather, loading } = weatherContext;

  const weekDays = [
    'Sunday',
    'Monday',
    'Tuesday',
    'Wednesday',
    'Thursday',
    'Friday',
    'Saturday'
  ];

  const months = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December'
  ];

  const dateStr = `${weekDays[new Date().getDay()]} ${new Date().getDate()} ${
    months[new Date().getMonth()]
  }`;
  const kelvinToCelcius = (k) => (k - 273.15).toFixed(0);

  if (loading) {
    return <Loader />;
  } else {
    if (!weather) {
      return (
        <div className="weather-card">
          <h3>{dateStr}</h3>
        </div>
      );
    } else {
      return (
        <div className="weather-card">
          <h3>{dateStr}</h3>

          <p>Temperature: {kelvinToCelcius(weather.main.temp)}&deg;C</p>
          <p>Condition: {weather.weather[0].description}</p>
          <p>Wind: {weather.wind.speed} km/h</p>
          <img
            src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
            alt="{weather.weather[0].description}"
            width="100px"
            height="100px"
          />
        </div>
      );
    }
  }
};

export default Weather;
