import React from 'react';

class SearchBar extends React.Component {
    constructor(props) {
        super(props);
        this.handleFilterTextChange = this.handleFilterTextChange.bind(this);
        this.handleInStockChange = this.handleInStockChange.bind(this);
    }
    
    handleFilterTextChange(e) {
        this.props.onFilterTextChange(e.target.value);
    }

    handleInStockChange(e) {
        this.props.onInStockChange(e.target.checked);
    }

    render() {
    
        const filterText = this.props.filterText;
        const inStockOnly = this.props.inStockOnly;
        
        return (
          <form onSubmit={this.handlerSubmit}>
            <input 
            type="text" 
            placeholder="Search..." 
            value={this.filterText} 
            onChange={this.handleFilterTextChange} 
            />
            <p>
              <input 
              type="checkbox" 
              checked={this.inStockOnly} 
              onChange={this.handleInStockChange}
              />
              Only Show products in stock
            </p>
          </form>
        );
    }
}

export default SearchBar;
