const SearchBar = () => {
  const searchMovies = e => {
    console.log(e.target.value);
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

export default SearchBar;
