import React from 'react';
import SearchBar from './SearchBar.js';
import Links from './Links.js'


class Menu extends React.Component {
    render() {
      return (
        <div id="Menu">
          <SearchBar />
          <Links />
        </div>
      );
    }
}

export default Menu;