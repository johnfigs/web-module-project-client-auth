import React from 'react';
import { BrowserRouter as Router, Route, Link, Switch } from 'react-router-dom';

import './App.css';

import Login from './components/Login'

function App() {
  return (
    <Router>
      <header className="App-header">
          <h1>Talking About Friends...</h1>
      </header>
      <div className="App">
        <ul>
          <li>
            <Link to="/login">Login</Link>
          </li>
          <li>
            <Link to="/addFriend">Add Friend</Link>
          </li>
          <li>
            <Link to="/listFriends">List Friends</Link>
          </li>
        </ul>

        <Switch>
          <Route path="/login" component={Login} />
        </Switch>
        
      </div>
    </Router>
  );
}

export default App;
