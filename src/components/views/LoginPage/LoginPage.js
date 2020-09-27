import React, { useState } from "react";
import { loginUser } from "../../../_actions/userAction";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";

// import {useDispatch} from 'react-redux';

function LoginPage(props) {
  const dispatch = useDispatch();
  const [Id, setID] = useState("");
  const [Password, setPassword] = useState("");

  const onIdHandler = (event) => {
    setID(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onRegisterHandler = (event) => {
    props.history.push("/RegisterPage");
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      id: Id,
      password: Password,
    };

    dispatch(loginUser(body)).then((response) => {
      if (response.payload.loginSuccess) {
        //로그인에 성공한 경우
        props.history.push("/MainBodyPage"); //페이지 이동!!
      } else {
        alert("Eroor");
      }
    });
  };

  return (
    <div className="userFormContainer">
      <p className="userFormTitle">Log in</p>

      <form onSubmit={onSubmitHandler}>
        <label className="formLabel">ID</label>
        <input
          type="text"
          className="formInput"
          value={Id}
          onChange={onIdHandler}
        />
        <label className="formLabel">Password</label>
        <input
          type="password"
          autoComplete="off"
          value={Password}
          className="formInput"
          onChange={onPasswordHandler}
        />
        <div className="formBtns">
          <button onClick={onRegisterHandler} className="btnRegister">
            Go to Sign Up!
          </button>
          <button type="submit" className="btnSubmit">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(LoginPage);
