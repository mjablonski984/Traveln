import { SEARCH_PLACES, GET_PLACE, CLEAR_PLACES, SET_LOADING, STOP_LOADING } from '../types';

export default (state, action) => {
  switch (action.type) {
    case SEARCH_PLACES:
      return {
        ...state,
        places: action.payload,
        loading: false
      };
    case GET_PLACE:
      return {
        ...state,
        place: action.payload,
        loading: false
      };
    case CLEAR_PLACES:
      return {
        ...state,
        places: [],
        loading: false
      };
    case SET_LOADING:
      return {
        ...state,
        loading: true
      };
    case STOP_LOADING:
      return {
        ...state,
        loading: false
      };
    default:
      return state;
  }
};
