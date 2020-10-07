export const BE_URL = "http://de279c8fb693.ngrok.io";


export const LOGIN_URL = `${BE_URL}/api/users/login`;
export const LOGIN_USER = "login_user";
export const REGISTER_URL = `${BE_URL}/api/users/register`;
export const REGISTER_USER = "register_user";

export const SEARCH_URL = `${BE_URL}/fundings/:funding_id`;
export const KEYWORDS = "keywords";
export const FUNDING_URL = `${BE_URL}/fundings`;
export const FUNDINGS = "fundings";


export const HEADER = {
  "content-type": "application/json",
  "Access-Control-Allow-Origin": "*",
}; 