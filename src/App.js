
import './App.css';
import { BrowserRouter as Router, Switch,  Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import initializeAuthencation from './Pages/Login/Firebase/firebase.initialize';

initializeAuthencation();

function App() {
  return (
    <div className="App">
      <Router>
      <Switch>
          <Route path="/about">
            <Home />
          </Route>
          <Route path="/appointment">
            <Appointment></Appointment>
          </Route>
          <Route path="/users">
            <Home />
          </Route>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/register">
            <Register />
          </Route>

          <Route exact path="/">
            <Home />
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
