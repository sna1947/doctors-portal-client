
import './App.css';
import { BrowserRouter as Router, Switch,  Route, Link } from "react-router-dom";
import Home from './Pages/Home/Home/Home';
import Appointment from './Pages/Appointment/Appointment/Appointment';
import Login from './Pages/Login/Login/Login';
import Register from './Pages/Login/Register/Register';
import initializeAuthencation from './Pages/Login/Firebase/firebase.initialize';
import AuthProvider from './contexts/AuthProvider/AuthProvider';
import PrivateRoute from './Pages/Login/PrivateRoute/PrivateRoute';
import Dashboard from './Pages/Dashboard/Dashboard/Dashboard';

initializeAuthencation();

function App() {
  return (
    <div className="App">
     <AuthProvider>
     <Router>
      <Switch>
          <Route path="/about">
            <Home />
          </Route>
          <PrivateRoute path="/appointment">
            <Appointment></Appointment>
          </PrivateRoute>
          <PrivateRoute path="/dashboard">
            <Dashboard></Dashboard>
          </PrivateRoute>
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
     </AuthProvider>
    </div>
  );
}

export default App;
