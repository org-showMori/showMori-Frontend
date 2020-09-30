import React from 'react';

// import getFunding from '../../../_actions/fundingAction';

function SearchBar(props) {
  const onSubmitHandler = (e) => {
    props.history.push('/MainBodyPage');

  };

  return (
    <div className="searchBarDiv">
      
      <form onSubmit={onSubmitHandler}>
      {/* <form onSubmit={onSubmitHandler} action={getFunding}> */}
      <input className="searchInput" type="text" name="search" placeholder="Search.."/>
      </form>
    </div>
  );
}


export default SearchBar;