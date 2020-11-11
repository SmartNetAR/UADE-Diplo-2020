import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import User from './pages/User';
import UserContext from './components/UserContext';
import { useState, useEffect } from "react";
import Home from "./pages/Home";

function App() {
  const [user, setUser] = useState(null)

  useEffect(() => {
    const localUser = localStorage.getItem('user');
    if (localUser)
    {
      setUser(JSON.parse(localUser)) 
    }
  }, [])


  return (
    <UserContext.Provider value={user}>
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
                onLogin={(info)=> setUser(info) }
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
