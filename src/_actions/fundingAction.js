import axios from "axios";
import {
  ALL_FUNDINGS_URL,
  SEARCH_URL,
  INFOFUNDING_URL,
  NEW_FUNDING_URL,
  DELETE_FUNDING_URL,
  ALL_POSTID_URL,
  GET_FUNDING_FOR_MODIFY_URL,
  MODIFY_FUNDING_URL
} from "./type";
import {
  ALL_FUNDINGS,
  KEYWORDS,
  INFOFUNDING,
  NEW_FUNDING,
  DELETE_FUNDING,
  ALL_POSTID,
  GET_FUNDING_FOR_MODIFY,
  MODIFY_FUNDING
} from "./type.js";

export function delFunding(dataToSubmit, postId) {
  const request = axios
    .delete(`${DELETE_FUNDING_URL}${postId}`, dataToSubmit)
    .then((response) => response.data);
  return {
    type: DELETE_FUNDING,
    payload: request,
  };
}

export function newFunding(dataToSubmit) {
  const request = axios
    .post(NEW_FUNDING_URL, dataToSubmit)
    .then((response) => response.data)
    

  return {
    type: NEW_FUNDING,
    payload: request,
  };
}

export function getAllPostId(dataToSubmit) {
  const request = axios
    .get(ALL_POSTID_URL, dataToSubmit)
    .then((response) => response.data);

    return {
      type: ALL_POSTID,
      payload: request,
    }
}

export function getAllFundingInfo(dataToSubmit) {
  const request = axios
    .get(ALL_FUNDINGS_URL, dataToSubmit)
    .then((response) => response.data);

  return {
    type: ALL_FUNDINGS,
    payload: request,
  };
}

export function infoFunding(postId) {
  const request = axios
    .get(`${INFOFUNDING_URL}${postId}`)
    .then((response) => response.data);

  return {
    type: INFOFUNDING,
    payload: request,
  };
}

export function searchFunding(dataToSubmit) {
  const request = axios
    .post(`${SEARCH_URL}${dataToSubmit}`)
    .then((response) => response.data);

  return {
    type: KEYWORDS,
    payload: request,
  };
}

export function beforeModifyFunding(postId) {
  const request = axios
    .get(`${GET_FUNDING_FOR_MODIFY_URL}${postId}`)
    .then((response) => response.data);

  return {
    type: GET_FUNDING_FOR_MODIFY,
    payload: request,
  }
}

export function modifyFunding(dataToSubmit, postId) {
  const request = axios 
    .put(`${MODIFY_FUNDING_URL}${postId}`, dataToSubmit)
    .then((response) => response.data);                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                                               

  return {
    type: MODIFY_FUNDING,
    payload: request,
  }
}