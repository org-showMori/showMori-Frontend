import axios from "axios";
import {
  FUNDING_URL,
  SEARCH_URL,
  INFOFUNDING_URL,
  NEW_FUNDING_URL,
  DELETE_FUNDING_URL,
} from "./type";
import {
  FUNDINGS,
  KEYWORDS,
  INFOFUNDING,
  NEW_FUNDING,
  DELETE_FUNDING,
  HEADER,
} from "./type.js";

export function delFunding(dataToSubmit, postId) {
  const request = axios
    .delete(`${DELETE_FUNDING_URL}${postId}/delete`, dataToSubmit)
    .then((response) => response.data);
  return {
    type: DELETE_FUNDING,
    payload: request,
  };
}

export function newFunding(dataToSubmit) {
  const request = axios
    .post(NEW_FUNDING_URL, dataToSubmit)
    .then((response) => response.data);

  return {
    type: NEW_FUNDING,
    payload: request,
  };
}

export function getFunding(dataToSubmit) {
  const request = axios
    .get(FUNDING_URL, dataToSubmit, HEADER)
    .then((response) => response.data);

  return {
    type: FUNDINGS,
    payload: request,
  };
}

export function infoFunding(dataToSubmit, postId) {
  const request = axios
    .get(`${INFOFUNDING_URL}${postId}`, dataToSubmit)
    .then((response) => response.data);

  return {
    type: INFOFUNDING,
    payload: request,
  };
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
