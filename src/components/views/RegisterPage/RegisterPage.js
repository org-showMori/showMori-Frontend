import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  registerUser,
  validateOverlapUser,
  checkOverlapUser,
} from "../../../_actions/userAction.js";

function RegisterPage(props) {
  const dispatch = useDispatch();
  const [Id, setId] = useState("");
  const [Pw, setPw] = useState("");
  const [ConfirmPw, setConfirmPw] = useState("");
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  let currentConfirmPw = "";
  let overlapState = false;

  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  };

  const validateOverlap = () => {
    const IdRegex = /^[a-zA-Z0-9]{4,12}$/;

    if (!IdRegex.test(Id)) {
      alert("아이디를 다시 입력해주세요.");
      return false;
    } else {
      overlapState = true;
    }

    let body = {
      user_id: Id,
    };

    // dispatch(checkOverlapUser(body)).then((response) => {
    //   if(response.payload.success === "true") {
    //     alert("사용가능한 아이디입니다.");
    //   } else {

    //   }
    // })
  };
  const onPwHandler = (e) => {
    setPw(e.currentTarget.value);
  };

  const onConfirmPwHandler = (e) => {
    setConfirmPw(e.currentTarget.value);
    currentConfirmPw += e.currentTarget.value;

    const checkConfirmPw = document.getElementById("alertConfirmPw");

    if (currentConfirmPw === Pw) {
      checkConfirmPw.classList.remove("notConfirmed");
      checkConfirmPw.classList.add("confirmed");
      checkConfirmPw.innerText = "비밀번호 확인이 완료되었습니다.";
    } else {
      checkConfirmPw.classList.remove("confirmed");
      checkConfirmPw.classList.add("notConfirmed");
      checkConfirmPw.innerText = "비밀번호 확인이 되지 않습니다.";
    }
  };

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onPhoneHandler = (e) => {
    setPhone(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    if (!overlapState) {
      alert("아이디 중복확인을 해주세요.");
      return false;
    }

    let body = {
      user_id: Id,
      password: Pw,
      user_name: Name,
      user_phone: Phone,
    };

    dispatch(registerUser(body)).then((response) => {
      console.log(response);
    });
  };

  const validatePhone = () => {
    if (isNaN(Phone)) {
      alert("전화번호는 숫자만 입력 가능합니다.");
      return false;
    }
  };

  return (
    <div className="userFormContainer">
      <p className="userFormTitle">Sign up</p>

      <form onSubmit={onSubmitHandler}>
        <div className="inputContainer" id="containerId">
          <p className="altValidInputs">
            <label className="formLabel">아이디</label>
            4~12자의 영문 대소문자와 숫자만 입력 가능합니다.
          </p>
          <input
            className="formInput"
            type="text"
            value={Id}
            onChange={onIdHandler}
            required
          />
          <input
            type="button"
            value="중복확인"
            className="formBtns"
            onClick={validateOverlap}
          />
        </div>

        <div className="inputContainer" id="containerPw">
          <p className="altValidInputs">
            <label className="formLabel">비밀번호</label>
            4~12자의 영문 대소문자와 숫자만 입력 가능합니다.
          </p>
          <input
            className="formInput"
            type="password"
            value={Pw}
            onChange={onPwHandler}
            required
          />
        </div>

        <div className="inputContainer" id="containerConfirmPw">
          <label className="formLabel">비밀번호 확인</label>
          <input
            className="formInput"
            type="password"
            value={ConfirmPw}
            onChange={onConfirmPwHandler}
            required
          />
          <p className="notConfirmed altValidInputs" id="alertConfirmPw">
            비밀번호 확인이 되지 않습니다.
          </p>
        </div>

        <div className="inputContainer" id="containerName">
          <p className="altValidInputs">
            <label className="formLabel">이름</label>
            한글 또는 영어만 입력해주세요.
          </p>
          <input
            className="formInput"
            type="text"
            value={Name}
            onChange={onNameHandler}
            required
          />
        </div>

        <div className="inputContainer" id="containerPhone">
          <p className="altValidInputs">
            <label className="formLabel">전화번호</label>- 자를 제외한 숫자만
            입력해주세요.
          </p>
          <input
            className="formInput"
            type="text"
            value={Phone}
            onChange={onPhoneHandler}
            required
          />
          {/* <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" /> */}
        </div>

        <button type="submit" className="formBtns btnSubmit">
          submit
        </button>
      </form>
    </div>
  );
}

export default RegisterPage;
