import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import City from './components/City';
import Store from './components/Store';

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
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
