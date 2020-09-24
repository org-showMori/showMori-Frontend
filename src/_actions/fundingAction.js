import axios from 'axios';
import {FUNDINGS} from './type.js';

const FUNDING_URL = '/api/funding';

export default function getFunding(dataToSubmit) {
    const request = axios.post(FUNDING_URL, dataToSubmit)
        .then(response=>response.data);

    return {
        type: FUNDINGS,
        payload: request,
    }
}