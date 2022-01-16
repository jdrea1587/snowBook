import { useEffect, useState } from "react";
import "./App.css";
import Nav from "./components/Nav";
import Home from "./components/Home";
import Footer from "./components/Footer";
import { Route } from "react-router-dom";
import City from "./components/City";
import Profile from "./components/Profile";
import Store from "./components/Store";
import Mountain from "./components/Mountain";
import StoreDetail from "./components/StoreDetail";
import axios from "axios";

function App() {
  const [mountains, setMountains] = useState([]);
  const [storeDetails, setStoreDetails] = useState([]);
  const [profile, setProfile] = useState([]);
  const [store, setStore] = useState([]);
  const [home, setHome] = useState([]);

  const getHome = async () => {
    const response = await axios.get("http://localhost:3001/api");
    console.log(response.data.users);
    setHome(response.data.users);
  };

  useEffect(() => {
    getHome();
  }, []);

  return (
    <div className="App">
      <header>
        <Nav />
      </header>
      <main>
        <Route
          exact
          path="/"
          component={(props) => <Home {...props} home={home} />}
        />
        <Route
          exact
          path="/profile"
          component={(props) => <Profile {...props} profile={profile} />}
        />
        <Route exact path="/city" component={City} />
        <Route exact path="/store" component={Store} />

        <Route
          exact
          path="/mountain/:id"
          component={(props) => <Mountain {...props} mountains={mountains} />}
        />
        <Route
          exact
          path="/storeDetail/:id"
          component={(props) => (
            <StoreDetail {...props} storeDetails={storeDetails} />
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
