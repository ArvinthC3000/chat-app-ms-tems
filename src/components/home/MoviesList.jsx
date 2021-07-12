import { FaHeart } from 'react-icons/fa';
import { connect } from 'react-redux';
import {
  addFavMovie,
  removeFavMovie,
  setModalID,
} from '../../actions/movieActions';
import PropTypes from 'prop-types';

const MoviesList = props => {
  const { addFavMovie, removeFavMovie, setModalID, movie, movieProps } = props;
  const { favorites } = movieProps;

  const isFav =
    favorites && favorites !== null
      ? favorites.some(fav => fav.id === movie.id)
      : false;

  // Toggle favorite
  const toggleFav = e => {
    e.stopPropagation();
    !isFav ? addFavMovie(movie.id) : removeFavMovie(movie.id);
  };

  return (
    <a
      href='#movie-modal'
      className='movieItem modal-trigger'
      onClick={() => setModalID(movie)}>
      <div
        className='movieItem'
        style={{
          backgroundImage: `url('https://image.tmdb.org/t/p/w500/${movie.poster_path}')`,
          backgroundSize: '100%, 100%',
        }}>
        <div className='overlay-container'>
          <div className='overlay-title'>{movie.title}</div>
          <div className='overlay-body'>
            <FaHeart color={`${isFav ? 'red' : ''}`} onClick={toggleFav} />
          </div>
        </div>
      </div>
    </a>
  );
};

MoviesList.propTypes = {
  movieProps: PropTypes.object.isRequired,
  addFavMovie: PropTypes.func.isRequired,
  removeFavMovie: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  movieProps: state.movie,
});

export default connect(mapStatetoProps, {
  addFavMovie,
  removeFavMovie,
  setModalID,
})(MoviesList);
