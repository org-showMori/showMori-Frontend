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
      user_id: Id,
      password: Password,
    };
    // // response : {
    //   user_id: "",
    //   sucess: "true" / "false"
    // }
    dispatch(loginUser(body)).then((response) => {
      console.log(response);

      if(response.payload.success === "true") {
        alert("로그인에 성공하셨습니다.");
        props.history.push('/');
      } else {
        alert("아이디 또는 비밀번호가 틀렸습니다.");
      }
    });
  };

  return (
    <div className="userFormContainer" >
      <p className="userFormTitle">Log in</p>

      <form onSubmit={onSubmitHandler}>
        <div className="inputContainer">
          <label className="formLabel">ID</label>
          <input
            type="text"
            className="formInput"
            value={Id}
            onChange={onIdHandler}
          />
        </div>
        <div className="inputContainer">
          <label className="formLabel">Password</label>
          <input
            type="password"
            autoComplete="off"
            value={Password}
            className="formInput"
            onChange={onPasswordHandler}
          />
        </div>
        <div id="LoginBtnContainer">
          <button onClick={onRegisterHandler} className="formBtns btnRegister">
            Go to Sign Up!
          </button>
          <button type="submit" className="formBtns btnSubmit ">
            LOGIN
          </button>
        </div>
      </form>
    </div>
  );
}

export default withRouter(LoginPage);
