import axios from 'axios';
import {LOGIN_USER, REGISTER_USER} from './type';

//api
const BE_URL = "http://localhost:3306";
const REGISTER_URL = BE_URL+'/api/users/register';
const LOGIN_URL = '/api/users/login';

// 모듈화된 axios로 제작된 request를 사용해 action 함수 생성
// post 요청을 보내고 받은 값을 payload에 실어서
// reducer에서 해당 타입을 읽을 수 있도록 함.

export function registerUser(dataToSubmit) {
    const request = axios.post(REGISTER_URL, dataToSubmit)
        .then(response=>response.data);

    return {
        type: REGISTER_USER,
        payload: request,
    }
}