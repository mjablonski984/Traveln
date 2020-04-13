import { GET_WEATHER, SET_LOADING, CLEAR_WEATHER } from '../types';

export default (state, action) => {
  switch (action.type) {
    case GET_WEATHER:
      return {
        ...state,
        weather: action.payload,
        loading: false
      };

    case SET_LOADING:
      return {
        ...state,
        loading: true
      };

    case CLEAR_WEATHER:
      return {
        ...state,
        weather: null,
        loading: false
      };
    default:
      return state;
  }
};
