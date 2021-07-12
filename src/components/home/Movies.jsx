import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getDefaultMovies } from '../../actions/movieActions';
import PropTypes from 'prop-types';
import MoviesList from './MoviesList';

const Movies = ({ getDefaultMovies, movie }) => {
  const { movies, popular, searchString } = movie;

  useEffect(() => {
    getDefaultMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className='header'>
        {movies === null ? 'Popular' : `Search result`}
      </div>
      <div className='movieContainer'>
        {movies == null ? (
          popular &&
          popular.map(movie => <MoviesList key={movie.id} movie={movie} />)
        ) : !movies.length ? (
          <div className='header'>No result found for '{searchString}'</div>
        ) : (
          movies.map(movie => <MoviesList key={movie.id} movie={movie} />)
        )}
      </div>
    </>
  );
};

const mapStatetoProps = state => ({
  movie: state.movie,
});

Movies.propTypes = {
  getDefaultMovies: PropTypes.func.isRequired,
};

export default connect(mapStatetoProps, { getDefaultMovies })(Movies);
