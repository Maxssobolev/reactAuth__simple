//modules
import React, { useState } from 'react';
import { BrowserRouter as Router, Route, Link, Switch, Redirect } from 'react-router-dom';
import PageRenderer from './page-renderer';
//context
import { UserContext } from './store/UserContext';
//assets
import './assets/css/style.css';

export default function App() {
  const [user, setUser] = useState(null);
  return (
    <Router>
      <div>
        <nav>
          <ul>
            <li>
              <Link to="/home">Home</Link>
            </li>
            <li>
              <Link to="/client">Client</Link>
            </li>
            <li>
              <Link to="/login">LogIn</Link>
            </li>
          </ul>
        </nav>

        <UserContext.Provider value={{ user, setUser }}>
          <Switch>
            <Route path="/:page" component={PageRenderer} />
            <Route path="/" render={() => <Redirect to="/home" />} />
            <Route component={() => 404} />
          </Switch>
        </UserContext.Provider>
      </div>
    </Router>
  );
}
