import React, { useState } from 'react';
import { useDispatch } from "react-redux";
import { getKeywordFunding} from "../../../_actions/fundingAction";


function SearchBar(props) {
  const dispatch = useDispatch();
  const [Keyword] = useState("");

  const onSubmitHandler = (e) => {

    let body = {
      keyword : Keyword
    }

    dispatch(getKeywordFunding(body)).then(response => {
      console.log(response);
    });

    props.history.push('/PrintPostPage');

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