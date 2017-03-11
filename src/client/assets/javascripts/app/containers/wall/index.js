import { connect } from 'react-redux';
import UserMovies from '../../components/UserMovies';
import {deleteMovie} from '../../actions';



const mapStateToProps = (state) => {
  let movieArray = [];
  movieArray = state.addUserMovies;
  return {
    allMovies: movieArray
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    deleteMovie: (movieId) => dispatch(deleteMovie(movieId))
  };
};


const Wall = connect(
  mapStateToProps,
  mapDispatchToProps
)(UserMovies);

export default Wall;
