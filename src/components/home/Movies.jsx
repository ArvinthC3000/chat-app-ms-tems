const Movies = () => {
  return (
    <>
      <div className='header'>
        {/* {movies !== null && !movies.length ? 'Popular' : `Search result`} */}
      </div>
      <div className='movieContainer'>
        {/* {movies == null ? (
              popular.map(movie => <MoviesList key={movie.id} movie={movie} />)
            ) : !movies.length ? (
              <div className='header'>No result found for '{searchString}'</div>
            ) : (
              movies.map(movie => <MoviesList key={movie.id} movie={movie} />)
            )} */}
      </div>
    </>
  );
};

export default Movies;
