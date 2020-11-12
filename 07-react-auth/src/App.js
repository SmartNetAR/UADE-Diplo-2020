import { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import UserContext from "./components/UserContext";
import About from './pages/About';
import { Home } from "./pages/Home";
import Login from './pages/Login';
import Register from './pages/Register';
import User from './pages/User';

function App() {

  const [user, setUser] = useState(null);

  useEffect(() => {
      const userLocalStorage = localStorage.getItem("user");
      if (userLocalStorage) {
        setUser( JSON.parse(userLocalStorage))
      }
  }, [])


  return (
    <UserContext.Provider value={ user }>

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
              <Login
                onLogin={(usuario)=> setUser(usuario) }
              />
          </Route>
          <Route path="/">
              <Home />
          </Route>
        </Switch>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
