import React, { useReducer } from 'react';
import axios from 'axios';
import PlacesReducer from './placesReducer';
import PlacesContext from './placesContext';
import { SEARCH_PLACES, GET_PLACE, CLEAR_PLACES, SET_LOADING, STOP_LOADING } from '../types';

const PlacesState = props => {
  const initialState = {
    places: [],
    place: {},
    loading: false
  };

  const [state, dispatch] = useReducer(PlacesReducer, initialState);

  const clientId = process.env.REACT_APP_CLIENT_ID;
  const clientSecret = process.env.REACT_APP_CLIENT_SECRET;

  const searchPlaces = async (place, section = 'trending') => {
    try {
      setLoading();

      const url = 'https://api.foursquare.com/v2/venues/explore?near=';

      const res = await axios.get(
        `${url}${place}&limit=24&section=${section}&client_id=${clientId}&client_secret=${clientSecret}&v=20180101`
      );

      // console.log(res.data.response.groups[0].items);

      dispatch({
        type: SEARCH_PLACES,
        payload: res.data.response.groups[0].items
      });
    } catch (err) {
      dispatch({ type: STOP_LOADING });
      console.warn(err.message);
    }
  };

  const getPlace = async (place, name) => {
    setLoading();

    const url = 'https://api.foursquare.com/v2/venues/search?ll='; // latlon

    const res = await axios.get(
      `${url}${place}&limit=1&intent=match&query=${name}&client_id=${clientId}&client_secret=${clientSecret}&v=20180101`
    );

    await dispatch({
      type: GET_PLACE,
      payload: res.data.response.venues[0]
    });
  };

  const clearPlaces = () => dispatch({ type: CLEAR_PLACES });

  const setLoading = () => dispatch({ type: SET_LOADING });

  return (
    <PlacesContext.Provider
      value={{
        places: state.places,
        place: state.place,
        loading: state.loading,
        searchPlaces,
        getPlace,
        clearPlaces
      }}
    >
      {props.children}
    </PlacesContext.Provider>
  );
};
export default PlacesState;
