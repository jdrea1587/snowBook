import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import City from './components/City';
import Profile from './components/Profile';
import Store from './components/Store';
import Mountain from './components/Mountain';

function App() {
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
        <Route path="/mountain" component={Mountain} />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
