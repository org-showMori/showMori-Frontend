import React, { useState } from "react";

// import {useDispatch} from 'react-redux';

function LoginPage() {
  // const dispatch = useDispatch();
  const [Id, setID] = useState("");
  const [Password, setPassword] = useState("");

  const onIDHandler = (event) => {
    setID(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();
    alert("submit");
  };

  return (
    <div className="userFormContainer">
      <p className="userFormTitle">Log in</p>

      <form onSubmit={onSubmitHandler}>
        <label>ID</label>
        <input type="text" id="inputId" value={Id} onChange={onIDHandler} />
        <label>Password</label>
        <input
          type="password"
          id="inputPw"
          autoComplete="off"
          value={Password}
          onChange={onPasswordHandler}
        />
        <button type="submit">LOGIN</button>
      </form>
    </div>
  );
}

export default LoginPage;
