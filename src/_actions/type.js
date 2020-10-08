import {SESSION_ID} from "../components/utils/SessionTypes";

const currentId = window.sessionStorage.getItem(SESSION_ID);
export const BE_URL = "http://5f14deff55bb.ngrok.io";


export const LOGIN_URL = `${BE_URL}/api/users/login`;
export const LOGIN_USER = "login_user";
export const REGISTER_URL = `${BE_URL}/api/users/register`;
export const REGISTER_USER = "register_user";
export const BEFORE_MODIFY_USER_URL = `${BE_URL}/api/users/${currentId}/beforeModification`;
export const BEFORE_MODIFY_USER = "get_user_info";
export const MODIFY_USER_URL = `${BE_URL}/api/users/${currentId}/afterModification`;
export const MODIFY_USER = "modify_user";
export const UNREGISTER_USER_URL = `${BE_URL}/api/users/${currentId}/unregister`;
export const UNREGISTER_USER = "unregister_user";

export const SEARCH_URL = `${BE_URL}/api/fundings/`;
export const KEYWORDS = "keywords";
export const FUNDING_URL = `${BE_URL}/api/fundings`;
export const FUNDINGS = "fundings";


// export const HEADER = {
//   "content-type": "application/json",
//   "Access-Control-Allow-Origin": "*",
// }; 