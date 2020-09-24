import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { registerUser } from "../../../_actions/userAction.js";

function RegisterPage(props) {
  const dispatch = useDispatch();
  const [Id, setId] = useState("");
  const [Pw, setPw] = useState("");
  const [ConfirmPw, setConfirmPw] = useState("");
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");
  const pValue = document.getElementById("alertConfirmPw");

  const onIdHandler = (e) => {
    setId(e.currentTarget.value);
  };
  const onPwHandler = (e) => {
    setPw(e.currentTarget.value);
  };

  const onConfirmPwHandler = (e) => {
    setConfirmPw(e.currentTarget.value);

    if (ConfirmPw === Pw) {
      pValue.innerHTML = "비밀번호 확인이 완료되었습니다.";
    }
  };
  //   if (ConfirmPw === Pw) {
  //       const pValue = document.getElementById("alertConfirmPw");
  //       pValue.innerHTML = "비밀번호 확인이 완료되었습니다.";
  //     }
  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onPhoneHandler = (e) => {
    setPhone(e.currentTarget.value);
  };
  const onSubmitHandler = (e) => {
    e.preventDefault();

    let body = {
      id: Id,
      pw: Pw,
      name: Name,
      phoneNumber: Phone,
    };

    dispatch(registerUser(body)).then((response) => {
      if (response.payload.success) {
        props.history.push("/LoginPage");
      } else {
        alert("회원가입에 실패했습니다.");
      }
    });
  };

  return (
    <div class="userFormContainer">
      <p className="userFormTitle">Sign up</p>
      <form onSubmit={onSubmitHandler}>
        <label>아이디</label>
        <input type="text" value={Id} onChange={onIdHandler} />
        <label>비밀번호</label>
        <input type="password" value={Pw} onChange={onPwHandler} />
        <label>비밀번호 확인</label>
        <input type="text" value={ConfirmPw} onChange={onConfirmPwHandler} />
        <p id="alertConfirmPw">비밀번호 확인이 되지 않습니다.</p>
        <label>이름</label>
        <input type="text" value={Name} onChange={onNameHandler} />
        <label>전화번호</label>
        <input type="number" value={Phone} onChange={onPhoneHandler} />
        {/* <input type="tel" name="phone" pattern="[0-9]{3}-[0-9]{4}-[0-9]{4}" /> */}
        <button type="submit">submit</button>
      </form>
    </div>
  );
}

export default RegisterPage;
