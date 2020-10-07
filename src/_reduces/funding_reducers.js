import {
    FUNDINGS,
    KEYWORDS
} from '../_actions/type';

export default function (state={}, action) {
    switch(action.type) {
        case FUNDINGS :
            return { ...state, success: action.payload};

        case KEYWORDS :
            return { ...state, success: action.payload};

        default: 
            return state;
    }
}