import { SESSION_ID } from "./SessionTypes";

const currentUser = window.sessionStorage.getItem(SESSION_ID);
export const AUTH = () => {
  if (currentUser === null) {
    return false;
  } else {
    return true;
  }
};

export const ChangeNav = () => {
  const loginLi = document.getElementById("Login");
  const registerLi = document.getElementById("Register");

  if (AUTH()) {
    loginLi.innerText = "로그아웃";
    registerLi.innerText = `${currentUser}님`
  } else {
    loginLi.innerText = "로그인";
    registerLi.innerText = "회원가입";
  }
};
