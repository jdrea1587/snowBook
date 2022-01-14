import './App.css';
import Nav from './components/Nav';
import Home from './components/Home';
import Footer from './components/Footer';
import { Route } from 'react-router-dom';
import City from './components/City';

function App() {
  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Route exact path="/" component={Home} />
        <Route exact path="/city" component={City} />
        <Route exact paht="/store" />
      </main>
      <footer>
        <Footer />
      </footer>
    </div>
  );
}

export default App;
