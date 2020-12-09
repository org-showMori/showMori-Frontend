import React, { useState, useEffect } from "react";
import { useDispatch } from "react-redux";
import { infoFunding } from "../../../_actions/fundingAction";
import FundingDetailComponent from "./Sections/FundingDetailComponent";
import ScrollToTopButton from "../../utils/ScrollToTopButton";

import "./DetailFundingPage.css";

function DetailFundingPage(props) {

  console.log(props.match.params)
  const detail = props.match.params

  return(
    <div>
      <h1>{detail.title}</h1>

      <div className="info">
        {/* poster */}
        <FundingDetailComponent />
      </div>
     
     {/*  detail information image*/}
     <ScrollToTopButton />
    </div>
  );

}

export default DetailFundingPage;
