import React from 'react';
import { BrowserRouter as Router, Link  } from "react-router-dom";
// import { SESSION_ID } from '../../utils/SessionTypes';

// import ModifyUserInfoPage from "../ModifyUserInfoPage/ModifyUserInfoPage";
// import FundingListPage from "../FundingListPage/FundingListPage";
// import DonationListPage from "../DonationListPage/DonationListPage";


export const UnRegister = () => {
    console.log("회원탈퇴기능");
}
export function MyPage({match}) {
    return (
    <Router>
      <div>
        <p>
            <b>apple</b>{/* <b>{window.sessionStorage.getItem(SESSION_ID)}</b> */}
            님</p>
        <div>
        <p><Link to="/users/:id">회원정보수정</Link></p>
        <p><Link to="/users/:id/fundings">펀딩내역조회</Link></p>
        <p><Link to="/users/:id/donations">후원내역조회</Link></p>
        <p><Link to="/users/:id/unregister">회원탈퇴</Link></p>
        </div>

      </div>
    </Router>
    );
}

