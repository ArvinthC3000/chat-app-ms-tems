import './App.css';
import 'materialize-css/dist/css/materialize.min.css';

import M from 'materialize-css/dist/js/materialize.min.js';
import Home from './components/home/Home';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import About from './components/about/About';
import { useEffect } from 'react';
import { Provider } from 'react-redux';
import store from './store';
import MovieModal from './components/modals/MovieModal';

function App() {
  useEffect(() => {
    // Init Materialize JS
    M.AutoInit();
  });

  return (
    <>
      <Provider store={store}>
        <MovieModal />
        <Router>
          <Switch>
            <Route path='/' exact component={Home} />
            <Route path='/about' exact component={About} />
          </Switch>
        </Router>
      </Provider>
    </>
  );
}

export default App;
