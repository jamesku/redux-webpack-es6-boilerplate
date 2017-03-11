import {combineReducers} from 'redux';
import update from 'react-addons-update';
import {DELETE_MOVIE, ADD_MOVIE, REQUEST_HT,
   CLEAR_MOVIE_SEARCH, RECEIVE_MOVIE_META,
    RECEIVE_USER_MOVIES, UPDATE_HT_VALUE } from '../actions';

// Change the state tree (movieSearch) based on the value input searching for the movie

function searchMovie(state = {
  isFetching: false,
  movieTitle: '',
  movieOverview: '',
  moviePosterPath: '',
  searchValue: ''
}, action) {
  switch (action.type) {
    case UPDATE_HT_VALUE:
      return Object.assign({}, state, {
        searchValue: action.value
      });

    // If the reducer is passed that the request is made is notes it in the state object
    case REQUEST_HT:
      return Object.assign({}, state, {
        isFetching: true,
        searchValue: action.movie
      });
    // If the reducer is passed that the response has been received, it updates the state
    case RECEIVE_MOVIE_META:
      return Object.assign({}, state, {
        isFetching: false,
        movieTitle: action.movieObject[0].original_title,
        movieOverview: action.movieObject[0].overview,
        moviePosterPath: action.movieObject[0].poster_path,
        _id: action.movieObject[0].id,
        lastUpdated: action.receivedAt
      });
    case CLEAR_MOVIE_SEARCH:
      return Object.assign({}, state, {
        isFetching: false,
        movieTitle: '',
        movieOverview: '',
        moviePosterPath: '',
        lastUpdated: action.receivedAt
      });
    default:
      return state;
  }
}


function addUserMovies(state = { UserMovies: []
}, action) {
  switch (action.type) {
    case ADD_MOVIE: {
      return ([...state, action.movie]);
    }
    case RECEIVE_USER_MOVIES: {
      if (state.UserMovies) {
        return (state.UserMovies.concat(action.movieArray));
      }
      return state;
    }
    case DELETE_MOVIE: {
      let index;
      state.map((obj,i) => {
        if (obj._id === action.movieId) {
          index = i;
        }
      });
      const newState = update(state, {$splice: [[index, 1]]});
      return newState;
    }
    default:
      return state;
  }
}

// Combine reducers
const rootReducer = combineReducers({
  searchMovie,
  addUserMovies
});

export default rootReducer;
