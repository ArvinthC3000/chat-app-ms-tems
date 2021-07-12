import { useEffect } from 'react';
import { connect } from 'react-redux';
import { getFavMovies } from '../../actions/movieActions';

const Favourite = ({ getFavMovies, movieProps }) => {
  const { favorites } = movieProps;

  useEffect(() => {
    getFavMovies();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <>
      <div className='header'>Favourites</div>
      <div className='movieContainer'>
        {favorites !== null && favorites.length ? (
          favorites.map(movie => (
            // <FavouritesList key={movie.id} movie={movie} />
            <div></div>
          ))
        ) : (
          <div className='header'>No favourite movies yet</div>
        )}
      </div>
    </>
  );
};

const mapStatetoProps = state => ({
  movieProps: state.movie,
});

export default connect(mapStatetoProps, { getFavMovies })(Favourite);
