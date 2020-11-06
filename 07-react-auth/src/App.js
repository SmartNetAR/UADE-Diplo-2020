import {
  BrowserRouter as Router,
  Route, Switch
} from "react-router-dom";
import './App.css';
import About from './pages/About';
import Login from './pages/Login';
import Register from './pages/Register';
import User from './pages/User';

function App() {


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
              <Login />
          </Route>
        </Switch>
    </Router>
  );
}

export default App;
