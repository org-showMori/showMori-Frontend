import React from 'react';
import {BrowserRouter as Route, Link} from 'react-router-dom';
import NewPostPage from './NewPostPage.js';
import LoginPage from './LoginPage.js';
import RegisterPage from './RegisterPage.js';

class Links extends React.Component {
    render() {
        return(
          <div id="Links">
            <Link to="/NewPostPage">NEW POST</Link>
            <div id="auth">
              <Link to="/LoginPage">LOGIN /</Link>
              <Link to="/RegisterPage"> REGISTER</Link>
            </div>
            <Route path="/NewPostPage" component={NewPostPage} />
            <Route path="/LoginPage" component={LoginPage} />
            <Route path="/RegisterPage" component={RegisterPage} />
          </div>
        );
    }
}

export default Links;