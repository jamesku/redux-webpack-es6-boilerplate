import React from 'react';
import Button from '../Button';
import './MovieMeta.css';

const MovieMeta = ({movieTitle, movieOverview, moviePosterPath, _id, saveMovie}) => {

  const imgLink = 'https://image.tmdb.org/t/p/w500/' + moviePosterPath;

  function image() {
    if (moviePosterPath !== '') {
      return <div className="item"><img src={imgLink} alt={''} /></div>;
    }

  }

  function callSaveMovie() {
    saveMovie(movieTitle, moviePosterPath, _id);
  }

  function addButton() {
    if (movieTitle) {
      return (<Button onClick={callSaveMovie} buttonText={'Add to Collection'} />);
    }
  }

  return (
    <div className="container">
      {image()}
      <div id="text">

        <div id="title" className="item">
          {movieTitle}
        </div>
        <div id="overview" className="item">
          {movieOverview}
        </div>
        {addButton()}

      </div>

    </div>
  );
};

export default MovieMeta;


MovieMeta.propTypes = {
  movieTitle: React.PropTypes.string,
  movieOverview: React.PropTypes.string,
  moviePosterPath: React.PropTypes.string,
  _id: React.PropTypes.string,
  saveMovie: React.PropTypes.func
};
