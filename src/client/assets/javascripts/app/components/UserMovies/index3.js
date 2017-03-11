import React from 'react';
import './UserMovies.css';
import Button from '../Button';
import '../../../node_modules/react-grid-layout/css/styles.css';
import '../../../node_modules/react-resizable/css/styles.css';
import ResponsiveReactGridLayout from 'react-grid-layout';

const UserMovies = ({allMovies, deleteMovie}) => {

  const imgLink = 'https://image.tmdb.org/t/p/w500/';

  function image(link) {
    if (link !== '') {
      return <img src={imgLink + link} alt={''} />;
    }
  }

  function makeButton(movieId) {
    if (movieId) {
      return (
        <Button onClick={() => deleteMovie(movieId)} buttonText={'Delete'} />
      );
    }
  }


      // layout is an array of objects, see the demo for more complete usage
  const layout = [
        {i: '1', x: 0, y: 0, w: 1, h: 2, static: true},
        {i: '2', x: 100, y: 0, w: 3, h: 2, minW: 2, maxW: 4},
        {i: '3', x: 400, y: 0, w: 1, h: 2}
  ];


  function returnMovies() {
    const movieList =
    Array.from(allMovies).map((result, index) => (
      <div key={index}>
        <div className="item" id="smallPic">
          {image(result.moviePosterPath)}
        </div>
        {result.movieTitle}
        <div>
          {makeButton(result._id)}
        </div>

      </div>
    )

    );
    return movieList;
  }

  return (
    <div className="container">
      <ResponsiveReactGridLayout className="layout" layout={layout} cols={12} rowHeight={30} width={1200}>
        {returnMovies()}
      </ResponsiveReactGridLayout>
    </div>
  );
};

export default UserMovies;
