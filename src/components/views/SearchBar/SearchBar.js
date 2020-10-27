import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { searchFunding} from "../../../_actions/fundingAction";


function SearchBar(props) {
  const dispatch = useDispatch();
  const [Keyword, setKeyword] = useState("");

  const onSubmitHandler = (e) => {
    e.preventDefault();
    dispatch(searchFunding(Keyword)).then(response => {
      console.log(response);
     
    });

    


};
  const onKeywordHandler = (e) => {
    setKeyword(e.currentTarget.value);
  }
  return (
    <div className="searchBarDiv">
      <form onSubmit={onSubmitHandler}>
      {/* <form onSubmit={onSubmitHandler} action={getFunding}> */}
      <input className="searchInput" onChange={onKeywordHandler} type="text" name="search" placeholder="Search.."/>
      </form>
    </div>
  );
}


export default SearchBar;