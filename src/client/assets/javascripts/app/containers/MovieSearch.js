import { connect } from 'react-redux';
import Header from '../components/Header';
import {searchForMovie, clearMovieSearch, saveMovie} from '../actions';

const mapStateToProps = (state) => {
  return {
    movieTitle: state.reducers.searchMovie.movieTitle,
    movieOverview: state.reducers.searchMovie.movieOverview,
    moviePosterPath: state.reducers.searchMovie.moviePosterPath,
    _id: state.reducers.searchMovie._id,
    searchValue: state.reducers.searchMovie.searchValue
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    onChange: (value) => {
      if (value) {
        dispatch(searchForMovie(value));
      } else {
        dispatch(clearMovieSearch());
      }
    },
    saveMovie: (movieTitle, moviePosterPath, _id) => {
      dispatch(saveMovie(movieTitle, moviePosterPath, _id));
    }
  };
};


const MovieSearch = connect(
  mapStateToProps,
  mapDispatchToProps
)(Header);

export default MovieSearch;
