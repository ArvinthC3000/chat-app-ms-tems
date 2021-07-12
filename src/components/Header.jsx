import SearchBar from './SearchBar';

const Header = () => {
  return (
    <>
      <nav className='app-header navbar'>
        <div className='title'>OMDB Redux</div>
        <SearchBar />
        <ul>
          <li>Home</li>
          <li>About</li>
        </ul>
      </nav>
    </>
  );
};

export default Header;
