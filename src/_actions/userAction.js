import axios from "axios";
import {
  REGISTER_URL,
  LOGIN_URL,
  BEFORE_MODIFY_USER_URL,
  MODIFY_USER_URL,
  UNREGISTER_USER_URL
} from './type';
import { 
  LOGIN_USER, 
  REGISTER_USER,
  BEFORE_MODIFY_USER,
  MODIFY_USER,
  UNREGISTER_USER
} 
from "./type";

// 모듈화된 axios로 제작된 request를 사용해 action 함수 생성
// post 요청을 보내고 받은 값을 payload에 실어서
// reducer에서 해당 타입을 읽을 수 있도록 함.


export function registerUser(dataToSubmit) {
    
  const request = axios.post(REGISTER_URL, dataToSubmit)
    .then((response) => response.data);

  return {
    type: REGISTER_USER,
    payload: request,
  };
}


export function loginUser(dataToSubmit) {

  const request = axios.post(LOGIN_URL, dataToSubmit)
    .then((response) => response.data);
  //response.data라고 해야 { user_id: asfa, check: asdfa} 이런 식으로 아연이가 보낸게 뜸
  return {
    type: LOGIN_USER,
    payload: request,
  };
}

export function beforeModifyUser(dataToSubmit) {
  const request = axios.get(BEFORE_MODIFY_USER_URL, dataToSubmit)
    .then((res) => res.data);

  return {
    type: BEFORE_MODIFY_USER,
    payload: request,
  }
}

export function modifyUser(dataToSubmit) {
  const request = axios.post(MODIFY_USER_URL, dataToSubmit)
    .then((res) => res.data);
  return {
    type: MODIFY_USER,
    payload: request,
  }
}

export function unRegisterUser(dataToSubmit) {
  const request = axios.delete(UNREGISTER_USER_URL, dataToSubmit)
    .then((res) => res.data);
  return {
    type: UNREGISTER_USER,
    payload: request,
  }
}