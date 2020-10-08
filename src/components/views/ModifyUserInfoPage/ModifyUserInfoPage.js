import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { beforeModifyUser, modifyUser } from "../../../_actions/userAction";

function ModifyUserInfoPage(props) {
  const dispatch = useDispatch();
  const [Name, setName] = useState("");
  const [Phone, setPhone] = useState("");

  useEffect(() => {
    dispatch(beforeModifyUser()).then((response) => {
      console.log(response);

      setName(response.payload.user_name);
      setPhone(response.payload.user_phone);
    });
  }, []);


  const regexState = (regex, text, state) => {
    if(!regex.test(state)) {
      alert(`${text.name} 입력 형식을 확인해주세요.`);
      return false;
    } else {
      return true;
    }
  }

  const onNameHandler = (e) => {
    setName(e.currentTarget.value);
  };
  const onPhoneHandler = (e) => {
    setPhone(e.currentTarget.value);
  };

  const onSubmitHandler = (e) => {
    e.preventDefault();

    const nameRegex = /^[가-힣a-zA-Z]+$/;
    const phoneRegex = /^[0-9]{2,3}-[0-9]{3,4}-[0-9]{4}$/;

    const checkName = document.getElementById("inputName");
    const checkPhone = document.getElementById("inputPhone");

    if(!regexState(nameRegex, checkName, Name) ||
      !regexState(phoneRegex, checkPhone, Phone)
      ) 
     { return false;}

     let body = {
      user_name: Name,
      user_phone: Phone,
     }

    dispatch(modifyUser(body)).then((response) => {
      console.log(response);

      if(response.payload.success) {
        alert('회원 수정에 성공했습니다.');
        props.history.push('/users');
      } else {
        alert('회원 정보수정에 실패했습니다.');
        return false;
      }
    })
  }

  return (
    <div className="userFormContainer">
      <p className="userFormTitle">User Info</p>

      <form onSubmit={onSubmitHandler}>
        <div className="inputContainer" id="containerId">
          <p className="altValidInputs">
            <label className="formLabel">아이디</label>
          </p>
          <input
            className="formInput"
            id="inputId"
            type="text"
            placeholder="아이디는 변경 불가능합니다."
            disabled
          />
        </div>

        <div className="inputContainer" id="containerPw">
          <p className="altValidInputs">
            <label className="formLabel">비밀번호</label>
          </p>
          <input
            className="formInput"
            id="inputPw"
            type="password"
            placeholder="비밀번호는 변경 불가능합니다."
            disabled
          />
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
        </div>
        <input type="submit" value="submit" className="formBtns btnSubmit" />
      </form>
    </div>
  );
}

export default ModifyUserInfoPage;
