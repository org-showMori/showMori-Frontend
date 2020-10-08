import axios from "axios";
import { FUNDING_URL, SEARCH_URL } from "./type";
import { FUNDINGS, KEYWORDS } from "./type.js";

export function getFunding(dataToSubmit) {
  const request = axios
    .get(FUNDING_URL, dataToSubmit)
    .then((response) => response.data);

  return {
    type: FUNDINGS,
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
