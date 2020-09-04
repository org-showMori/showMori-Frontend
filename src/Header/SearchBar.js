import React from 'react';

class SearchBar extends React.Component {

    render() {
        return (
          <div id="SearchBarDiv">
            <form onSubmit={this.handleSubmit}>
              <input type="text" id="inputText"/>
              <input type="button" value="검색" id="SearchBtn"/>
            </form>
          </div>
        );
    }
}

export default SearchBar;