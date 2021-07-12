import { FaHeart } from 'react-icons/fa';

const MoviesList = ({ addFavMovie, removeFavMovie, setModalID, movie }) => {
  const { favorites } = movie;

  const isFav =
    favorites && favorites !== null
      ? favorites.some(fav => fav.id === movie.id)
      : false;

  // Toggle favorite
  const toggleFav = e => {
    e.stopPropagation();
    !isFav ? addFavMovie(movie.id) : removeFavMovie(movie.id);
  };
  console.log('ss');

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

export default MoviesList;
