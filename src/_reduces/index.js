import {combineReducers} from 'redux'; //combinereducer를 이용해서 root reducer에서 모든 reducer를 한번에 합쳐줌.
import user from './user_reducer';
import fundings from './funding_reducers';

const rootReducer = combineReducers({
    user,
    fundings
    //여기에 합칠 기능들을 다 넣는 것.
})

export default rootReducer;