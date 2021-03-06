import {
  ALL_FUNDINGS,
  KEYWORDS,
  INFOFUNDING,
  NEW_FUNDING,
  DELETE_FUNDING,
  ALL_POSTID,
  GET_FUNDING_FOR_MODIFY,
  MODIFY_FUNDING,
} from "../_actions/type";

export default function (state = {}, action) {
  switch (action.type) {
    case ALL_FUNDINGS:
      return { ...state, success: action.payload };
    case KEYWORDS:
      return { ...state, success: action.payload };
    case INFOFUNDING:
      return { ...state, success: action.payload };
    case NEW_FUNDING:
      return { ...state, success: action.payload };
    case DELETE_FUNDING:
      return { ...state, success: action.payload };
    case ALL_POSTID:
      return { ...state, success: action.payload };
    case GET_FUNDING_FOR_MODIFY:
      return { ...state, success: action.payload };
    case MODIFY_FUNDING:
      return { ...state, success: action.payload };
    default:
      return state;
  }
}
