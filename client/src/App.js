import { useState } from 'react';
import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import City from './components/City';
import Profile from './components/Profile';
import Store from './components/Store';
import Mountain from './components/Mountain';
import storeDetail from './components/storeDetail';

function App() {
  const [mountains, setMountains] = useState([]);
  const [storeDetails, setStoreDetails] = useState([]);
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/city" component={City} />
        <Route exact path="/store" component={Store} />
        <Route exact path="/profile" component={Profile} />
        <Route
          exact
          path="/mountain/:id"
          component={(props) => <Mountain {...props} mountains={mountains} />}
        />
        <Route
          exact
          path="/storeDetail/:id"
          component={(props) => (
            <storeDetail {...props} storeDetails={storeDetails} />
          )}
        />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
