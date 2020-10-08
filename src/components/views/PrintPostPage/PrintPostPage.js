import React, {useState, useEffect} from 'react';
import { useDispatch } from "react-redux";

import Banner from '../Banner/Banner';
import {getFunding} from "../../../_actions/fundingAction";

function PrintPostPage() {
    const dispatch = useDispatch();
    const newDate = new Date();

    let body = {
        today: newDate
    }

    useEffect(() => {
        dispatch(getFunding(body)).then((res) => {
            console.log(res);
            console.log(res.payload[0]);
        })
    }, []);
    return (
        <div id="printPostContainer">
            <Banner />
            <div>

            </div>
        </div>

    );
}

export default PrintPostPage;