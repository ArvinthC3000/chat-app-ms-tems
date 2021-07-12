import Header from '../shared/Header';
import Favourite from './Favourite';
import Movies from './Movies';

const Home = () => {
  return (
    <div>
      <Header />
      <Movies />
      <Favourite />
    </div>
  );
};

export default Home;
