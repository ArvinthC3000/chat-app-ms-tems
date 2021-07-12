import axios from 'axios';
import {
  ADD_FAVORITES,
  GET_FAVORITES,
  GET_MOVIES,
  GET_SEARCH_STRING,
  REMOVE_FAVORITES,
  REMOVE_MOVIES,
  SET_DEFAULT_MOVIES,
  SET_MODAL_DATA,
} from './types';

const api_key = `04c35731a5ee918f014970082a0088b1`; // TMDB
const tmdb_url = `https://api.themoviedb.org/3`; // TMDB

// Get Default movies
export const getDefaultMovies = () => {
  console.log('here');
  return async dispatch => {
    console.log('also here');
    try {
      const response = await axios.get(`${tmdb_url}/movie/popular`, {
        params: { api_key, language: 'en-US', page: '1' },
      });
      const { results } = response.data;
      console.log(results);
      dispatch({
        type: SET_DEFAULT_MOVIES,
        payload: results,
      });
    } catch (err) {
      console.log(err);
    }
  };
};
