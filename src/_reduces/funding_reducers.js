import {
    FUNDINGS,
    KEYWORDS,
    INFOFUNDING,
    NEW_FUNDING,
    DELETE_FUNDING
} from '../_actions/type';

export default function (state={}, action) {
    switch(action.type) {
        case FUNDINGS :
            return { ...state, success: action.payload};
        case KEYWORDS :
            return { ...state, success: action.payload};
        case INFOFUNDING :
            return { ...state, success: action.payload};
        case NEW_FUNDING :
            return { ...state, success: action.payload};
        case DELETE_FUNDING :
            return { ...state, success: action.payload};
        default: 
            return state;
    }
}