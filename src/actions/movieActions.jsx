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

// Add new fav movies
export const addFavMovie = id => dispatch => {
  dispatch({
    type: ADD_FAVORITES,
    payload: id,
  });
};

// Remove from fav movies
export const removeFavMovie = id => dispatch => {
  dispatch({
    type: REMOVE_FAVORITES,
    payload: id,
  });
};

// Get favorite movies from local storage
export const getFavMovies = () => dispatch => {
  dispatch({
    type: GET_FAVORITES,
  });
};

// Get Default movies
export const getDefaultMovies = () => async dispatch => {
  try {
    const response = await axios.get(`${tmdb_url}/movie/popular`, {
      params: { api_key, language: 'en-US', page: '1' },
    });
    const { results } = response.data;
    dispatch({
      type: SET_DEFAULT_MOVIES,
      payload: results,
    });
  } catch (err) {
    console.log(err);
  }
};

export const setModalID = movie => dispatch => {
  dispatch({
    type: SET_MODAL_DATA,
    payload: movie,
  });
};

// Get movies based on search string
export const getMovies = string => async dispatch => {
  if (!string.trim().length) {
    setSearchString(null);
    removeMovies();
    return;
  }
  setSearchString(string);
  const response = await axios.get(`${tmdb_url}/search/movie`, {
    params: { sort_by: 'created_at.asc', query: string, api_key },
  });

  const { results } = response.data;

  dispatch({
    type: GET_MOVIES,
    payload: results,
  });
};

export const setSearchString = string => dispatch => {
  dispatch({
    type: GET_SEARCH_STRING,
    payload: string,
  });
};

// Rmove movies from state
export const removeMovies = () => dispatch => {
  dispatch({
    type: REMOVE_MOVIES,
  });
};
