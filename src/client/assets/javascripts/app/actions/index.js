import axios from 'axios';

export const ADD_MOVIE = 'ADD_MOVIE';
export const DELETE_MOVIE = 'DELETE_MOVIE';
export const REQUEST_HT = 'REQUEST_HT';
export const RECEIVE_MOVIE_META = 'RECEIVE_MOVIE_META';
export const REQUEST_USER_MOVIES = 'REQUEST_USER_MOVIES';
export const RECEIVE_USER_MOVIES = 'RECEIVE_USER_MOVIES';
export const CLEAR_MOVIE_SEARCH = 'CLEAR_MOVIE_SEARCH';
export const UPDATE_HT_VALUE = 'UPDATE_HT_VALUE';

export function updateHTValue(value) {
  return {
    type: UPDATE_HT_VALUE,
    value
  };
}

export function requestHT(hashtag) {
  return {
    type: REQUEST_HT,
    hashtag
  };
}

function addUserMovie(movie) {
  return {
    type: ADD_MOVIE,
    movie
  };
}
//
// function receiveMovieMeta(json) {
//   return {
//     type: RECEIVE_MOVIE_META,
//     movieObject: json,
//     receivedAt: Date.now()
//   };
// }

function requestUserMovies() {
  return {
    type: REQUEST_USER_MOVIES,
  };
}

function receiveUserMovies(movieArray) {
  return {
    type: RECEIVE_USER_MOVIES,
    movieArray,
    receivedAt: Date.now()
  };
}

export function clearMovieSearch() {
  return {
    type: CLEAR_MOVIE_SEARCH
  };
}

export function deleteMovieFromState(movieId) {
  return {
    type: DELETE_MOVIE,
    movieId
  };
}


export function saveMovie(movieTitle, moviePosterPath, _id) {
  return function (dispatch) {

    const movie = {
      movieTitle,
      moviePosterPath,
      _id
    };

      // Initial dispatch to add the movie to the local store
    dispatch(addUserMovie(movie));

      // Return a Promise via Axios to wait for
    return axios.post('http://localhost:4000/movies' , movie);

  };

}


// THUNK Action Creator
export function getUserMovies() {

  // THUNK automatically passes dispatch
  return function (dispatch) {
      // Initial dispatch to let the app know that a request has been made
    dispatch(requestUserMovies());

      // Return a Promise via Axios to wait for
    return axios({
      url: 'http://localhost:4000/movies',
      timeout: 20000,
      method: 'get',
      responseType: 'json'
    })
      // When the response is received, dispatch the data (via action creator)

      .then(resp => {
        const MovieArray = [];
        resp.data.forEach((obj) => {
          const movie = {
            movieTitle: obj.movieTitle,
            moviePosterPath: obj.moviePosterPath,
            _id: obj._id
          };
        //  dispatch(resp.dataddUserMovie(movie));
          MovieArray.push(movie);
        });

        // I HAVE A BIG QUESTIO HERE! (ABOUT MANIPULATING THINGS IN STATE IN REDUX)
        dispatch(receiveUserMovies(MovieArray));
      });
			// .catch(function(response){
			// 	dispatch(receiveError(response.data));
			// 	dispatch(pushState(null,'/error'));
			// })
  };
}

function addHT(searchValue) {
  return function (dispatch) {

    const hashtag = {
      hashtag: searchValue
    };
    axios.post('http://localhost:8080/newhashtag' , hashtag);

  };
}

export function searchForHT(searchValue) {
  return function (dispatch) {
      // Dispatch the request for the Movie Meta Data
  //  dispatch(requestHT(searchValue));

    dispatch(addHT(searchValue));
    //

  };
}

export function uploadMedia() {
  return function (dispatch) {
      // Dispatch the request for the Movie Meta Data
  //  dispatch(requestHT(searchValue));

    dispatch(addHT());
    //

  };
}

export function updateHT(value) {
  return function (dispatch) {
      // Dispatch the request for the Movie Meta Data
    dispatch(updateHTValue(value));
  };
}


export function deleteMovie(movieId) {
  return function (dispatch) {
      // Dispatch the request for the Movie Meta Data
    dispatch(deleteMovieFromState(movieId));

    axios.delete('http://localhost:4000/movies/' + movieId);
    // return axios({
    //   method: 'delete',
    //   url: 'http://localhost:4000/movies?movie.movieTitle=' + movieTitle,
    // })
    //     // When the response is received, dispatch the data (via action creator)
    //     .then(resp => {
    //       console.log('movie deleted');
    //     });
    //     // .catch(function(response){
        // 	dispatch(receiveError(response.data));
        // 	dispatch(pushState(null,'/error'));
        // })
  };
}
