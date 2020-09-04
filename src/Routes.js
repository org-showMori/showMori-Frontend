import React from 'react';
import {BrowserRouter as Router, Route, Switch, Link} from 'react-router-dom';

import NewPostPage from './Header/Menu/NewPostPage.js';
import SearchBar from './Header/Menu/SearchBar.js';
import LoginPage from './Header/Menu/LoginPage.js';
import RegisterPage from './Header/Menu/RegisterPage.js';

class Routes extends React.Component {
    render() {
        return (
          <Router>
            <div>
              <Link to="/NewPostPage.js">New Post Page</Link>
              <Link to="/LoginPage.js">Login Page</Link>
              <Link to="/RegisterPage.js">Register Page</Link>
            </div>
              <Route path="/Menu/NewPostPage.js" component={NewPostPage} />
              <SearchBar />
              <Route path="/Menu/LoginPage.js" component={LoginPage} />
              <Route path="/Menu/RegisterPage.js" component={RegisterPage} />
          </Router>
        );
    }
}

export default Routes;