import React, { useState } from "react";
import { useDispatch } from "react-redux";
import {
  registerUser,
  checkOverlapUser,
} from "../../../_actions/userAction.js";

function RegisterPage(props) {
  const dispatch = useDispatch();
  const [Id, setId] = useState("");
  const [Password, setPassword] = useState("");
  const [ConfirmPw, setConfirmPw] = useState("");
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  let overlap = false;

  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  };
  
  const validateOverlap = () => {
    
    const idRegex = /^[a-zA-Z0-9]{4,12}$/;

    if(idRegex.test(Id)) {
      return true;
    } else {
      return false;
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
  }; //아이디 중복여부 체크

  const checkConfirmPw = (currentConfirmPw, compare) => {
    const checkConfirmPw = document.getElementById("alertConfirmPw");

    if (currentConfirmPw === compare) {
      checkConfirmPw.classList.remove("notConfirmed");
      checkConfirmPw.classList.add("confirmed");
      checkConfirmPw.innerText = "비밀번호 확인이 완료되었습니다.";
    } else {
      checkConfirmPw.classList.remove("confirmed");
      checkConfirmPw.classList.add("notConfirmed");
      checkConfirmPw.innerText = "비밀번호 확인이 되지 않습니다.";
    }
  }

  
  const onPwHandler = (e) => {
    setPassword(e.currentTarget.value);

    let currentConfirmPw = "";
    currentConfirmPw += e.currentTarget.value;
    checkConfirmPw(currentConfirmPw, ConfirmPw);
  };

  const onConfirmPwHandler = (e) => {
    setConfirmPw(e.currentTarget.value);

    let currentConfirmPw = "";
    currentConfirmPw += e.currentTarget.value;
    checkConfirmPw(currentConfirmPw, Password);
  };

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onPhoneHandler = (e) => {
    setPhone(e.currentTarget.value);
  };

  const regexState = (regex, text, state) => {

    if(!regex.test(state)) {
      alert(`${text.name} 입력 형식을 확인해주세요.`);
      return false;
    } else {
      return true;
    }
  }


  const onSubmitHandler = (e) => {
    e.preventDefault();

    // 유효성 체크
    if(!validateOverlap()) {
      alert('아이디 입력 형식을 확인해주세요.');
      return false;
    }

    if(ConfirmPw !== Password) {
      alert(`비밀번호 확인을 해주세요.`);
      return false;
    }

    const nameRegex = /^[가-힣a-zA-Z]+$/;
    const phoneRegex = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;
    const checkName = document.getElementById("inputName");
    const checkPhone = document.getElementById("inputPhone");

    if(!regexState(nameRegex, checkName, Name) ||
      !regexState(phoneRegex, checkPhone, Phone)) 
     { return false;}

    // request to server
    let body = {
      user_id: Id,
      password: Password,
      user_name: Name,
      user_phone: Phone,
    };

    dispatch(registerUser(body)).then((response) => {
      console.log(response);
    });
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
          {/* <input
            type="button"
            id="inputId"
            value="중복확인"
            className="formBtns"
            onClick={validateOverlap}
          /> */}
        </div>

        <div className="inputContainer" id="containerPw">
          <p className="altValidInputs">
            <label className="formLabel">비밀번호</label>
            4~12자의 영문 대소문자와 숫자만 입력 가능합니다.
          </p>
          <input
            className="formInput"
            id="inputPw"
            type="password"
            value={Password}
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
          <p className="notConfirmed altValidInputs" name="비밀번호" id="alertConfirmPw">
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
            id="inputName"
            name="이름"
            type="text"
            value={Name}
            onChange={onNameHandler}
            required
          />
        </div>

        <div className="inputContainer" id="containerPhone">
          <p className="altValidInputs">
            <label className="formLabel">전화번호</label>
          </p>
          <input
            className="formInput"
            id="inputPhone"
            name="전화번호"
            type="text"
            value={Phone}
            onChange={onPhoneHandler}
            required
            placeholder="010-1234-1234"
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
