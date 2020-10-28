import React, { useState } from "react";
import { loginUser } from "../../../_actions/userAction";
import { useDispatch } from "react-redux";
import { withRouter } from "react-router-dom";
import { SESSION_ID} from "../../utils/SessionTypes";

// import {useDispatch} from 'react-redux';


function LoginPage(props) {
  const dispatch = useDispatch();
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");

  const onIdHandler = (event) => {
    setId(event.currentTarget.value);
  };

  const onPasswordHandler = (event) => {
    setPassword(event.currentTarget.value);
  };

  const onRegisterHandler = (event) => {
    event.preventDefault();
    props.history.push("/register");
  };

  const onSubmitHandler = (event) => {
    event.preventDefault();

    let body = {
      user_id: Id,
      password: Password,
    };

    // setID(Id);
    // doSession();

    // // response : {
    //   user_id: "",
    //   sucess: "true" / "false"
    // }
    dispatch(loginUser(body)).then((response) => {
      console.log(response);
      // response.payload.success
      if(response.payload.success) {
        setId(response.payload.user_id);
        doSession();
      } else {
        alert('아이디 또는 비밀번호 입력이 잘못 됐습니다.');
      }
     
    });
  };

  const doSession = () => {
    const tempId = Id;
    window.sessionStorage.setItem(SESSION_ID, tempId);
    alert(`${tempId}님 반갑습니다.`);
    window.location.replace('/posts');
   
  };

  return (
    <div className="userFormContainer">
      <p className="userFormTitle">Log in</p>

      <form onSubmit={onSubmitHandler}>
        <div className="inputContainer">
          <label className="formLabel">ID</label>
          <input
            type="text"
            className="formInput"
            value={Id}
            onChange={onIdHandler}
            required
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
            required
          />
        </div>
        <div id="LoginBtnContainer">
          <input type="button" value="Go to Sign Up!" onClick={onRegisterHandler} className="formBtns btnRegister" />
          <input type="submit" value="LOGIN" className="formBtns btnSubmit "/>
        </div>
      </form>
    </div>
  );
}

export default withRouter(LoginPage);
