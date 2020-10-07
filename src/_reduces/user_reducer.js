import {
    LOGIN_USER,
    REGISTER_USER
} from '../_actions/type';

//previousState, action을 nextState로 만듦
export default function (state= {}, action) {
    switch(action.type) { //action의 타입에 맞게 state 설정
        case LOGIN_USER:
            return { ...state,  success: action.payload }; 
            //스프레드 오퍼레이터 : arg로 되어있는 state를 그대로 사용한다는 의미
            // user_action.js에서의 payload를 loginSuccess에 넣어줌
        case REGISTER_USER:
            return { ...state, register: action.payload };
       

        default:
            return state;
    }
}