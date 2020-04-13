import React, { useReducer } from 'react';
import WeatherReducer from './weatherReducer';
import WeatherContext from './weatherContext';
import axios from 'axios';
import { GET_WEATHER, SET_LOADING, CLEAR_WEATHER } from '../types';

const WeatherState = (props) => {
  const initialState = {
    weather: null,
    loading: false
  };

  const [state, dispatch] = useReducer(WeatherReducer, initialState);

  const url = 'https://api.openweathermap.org/data/2.5/weather';
  const openWeatherKey = process.env.REACT_APP_OPEN_WEATHER_KEY;

  const getWeather = async (place) => {
    setLoading();

    const res = await axios.get(`${url}?&q=${place}&APPID=${openWeatherKey}`);

    console.log(res.data);

    dispatch({
      type: GET_WEATHER,
      payload: res.data
    });
  };

  const setLoading = () => dispatch({ type: SET_LOADING });

  const clearWeather = () => dispatch({ type: CLEAR_WEATHER });

  return (
    <WeatherContext.Provider
      value={{
        weather: state.weather,
        loading: state.loading,
        getWeather: getWeather,
        clearWeather: clearWeather
      }}
    >
      {props.children}
    </WeatherContext.Provider>
  );
};
export default WeatherState;
