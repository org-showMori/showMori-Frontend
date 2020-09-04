import React from 'react';
import {BrowserRouter as Router} from 'react-router-dom';
import Header from './Header/Header.js';
import Main from './Main/Main.js';
import './App.css';


class App extends React.Component {

  render() {
    return (
      <div>
        <Router>
          <Header />
        </Router>
        <Main />
      </div>
    );
  }
}
export default App;
