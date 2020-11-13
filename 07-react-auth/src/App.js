import { useEffect, useContext } from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import { UserContext } from "./context/UserContext";
import About from './pages/About';
import { Home } from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import User from './pages/User';

function App() {

  const userData = useContext(UserContext);

  useEffect(() => {
      const userLocalStorage = localStorage.getItem("user");
      if (userLocalStorage) {
        userData.setUser( JSON.parse(userLocalStorage) );
      }
  }, [])


  return (

    <Router>
        <Switch>
          <Route path="/about">
              <About />
          </Route>
          <Route path="/register">
              <Register />
          </Route>
          <Route path="/user/:idUser">
              <User />
          </Route>
          <Route path="/user">
              <User />
          </Route>
          <Route path="/login">
              <Login />
          </Route>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
