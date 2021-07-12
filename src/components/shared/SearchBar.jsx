import { connect } from 'react-redux';
import { getMovies } from '../../actions/movieActions';

const SearchBar = ({ getMovies }) => {
  const searchMovies = e => {
    getMovies(e.target.value);
  };
  return (
    <div className='searchBar'>
      <input
        type='text'
        name='movieString'
        onChange={searchMovies}
        placeholder='Search movies...'
        style={{ color: 'white' }}
      />
    </div>
  );
};

export default connect(null, { getMovies })(SearchBar);
