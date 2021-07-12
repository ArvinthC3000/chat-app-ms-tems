import PropTypes from 'prop-types';
import { FaHeart } from 'react-icons/fa';
import { connect } from 'react-redux';
import { removeFavMovie, setModalID } from '../../actions/movieActions';

const FavouritesList = props => {
  const { removeFavMovie, setModalID, movie } = props;

  // Remove favorite
  const toggleFav = e => {
    e.stopPropagation();
    removeFavMovie(movie.id);
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
            <FaHeart onClick={toggleFav} color='red' />
          </div>
        </div>
      </div>
    </a>
  );
};

FavouritesList.propTypes = {
  removeFavMovie: PropTypes.func.isRequired,
  setModalID: PropTypes.func.isRequired,
};

const mapStatetoProps = state => ({
  movieProps: state.movie,
});

export default connect(mapStatetoProps, { removeFavMovie, setModalID })(
  FavouritesList
);
