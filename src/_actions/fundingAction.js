import axios from "axios";
import { FUNDING_URL, SEARCH_URL, INFOFUNDING_URL } from "./type";
import { FUNDINGS, KEYWORDS, INFOFUNDING } from "./type.js";

const header = {
  'content-type': 'multipart/form-data'
}
export function getFunding(dataToSubmit) {
  const request = axios
    .get(FUNDING_URL, dataToSubmit)
    .then((response) => response.data);

  return {
    type: FUNDINGS,
    payload: request,
  };
}

export function infoFunding(dataToSubmit, postId) {
  const request = axios.get(`${INFOFUNDING_URL}${postId}`, dataToSubmit)
                      .then((response) => response.data);

  return {
    type: INFOFUNDING,
    payload: request,
  }
}

export function getKeywordFunding(dataToSubmit) {
  const request = axios
    .post(SEARCH_URL, dataToSubmit)
    .then((response) => response.data);

  return {
    type: KEYWORDS,
    payload: request,
  };
}
