import {SESSION_ID} from "../components/utils/SessionTypes";

const currentId = window.sessionStorage.getItem(SESSION_ID);
export const BE_URL = "http://5580b6092b6c.ngrok.io";


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

export const ALL_POSTID_URL = `${BE_URL}/api/funding/all-post-id`;
export const ALL_POSTID = "all_postId";
export const FUNDING_URL = `${BE_URL}/api/funding/all`;
export const FUNDINGS = "fundings";
export const SEARCH_URL = `${BE_URL}/api/fundings/`;
export const KEYWORDS = "keywords";
export const INFOFUNDING_URL = `${BE_URL}/api/fundings/`;
export const INFOFUNDING = "info_funding";
export const NEW_FUNDING_URL = `${BE_URL}/api/fundings/posting`;
export const NEW_FUNDING = "new_funding";
export const DELETE_FUNDING_URL = `${BE_URL}/api/funding/:post_id/remove`;
export const DELETE_FUNDING = "delete_funding";


export const HEADER = {
  "content-type": "application/json",
  "Access-Control-Allow-Origin": "*",
}; 