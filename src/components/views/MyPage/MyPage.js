import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import ModifyUserInfoPage from "../ModifyUserInfoPage/ModifyUserInfoPage";
import FundingListPage from "../FundingListPage/FundingListPage";
import DonationListPage from "../DonationListPage/DonationListPage";
import UnRegisterPage from "../RegisterPage/UnRegister";

import { SESSION_ID } from "../../utils/SessionTypes";

function MyPage() {
  const onClicekdHandler = (e) => {
    const currentDom = e.currentTarget;
    currentDom.classList.add("#ED4C67");
  };
  const onMouseEnterHanlder = (e) => {
    const currentDom = e.currentTarget;
    currentDom.classList.add("clickedBtn");
  };
  const onMouseLeaveHandler = (e) => {
    const currentDom = e.currentTarget;
    currentDom.classList.remove("clickedBtn");
  };

  return (
    <div className="myPageContainer">
      <Router>
        <div className="myPageNavContainer">
          <p className="userId">
            {/* <b>apple</b> */}
            <b>{window.sessionStorage.getItem(SESSION_ID)}</b>님
          </p>
          <ul className="myPageNav">
            <li>
              <Link
                to="/users/:id/user_info"
                onClick={onClicekdHandler}
                onMouseEnter={onMouseEnterHanlder}
                onMouseLeave={onMouseLeaveHandler}
              >
                회원정보수정
              </Link>
            </li>
            <li>
              <Link
                to="/users/:id/fundings"
                onMouseEnter={onMouseEnterHanlder}
                onMouseLeave={onMouseLeaveHandler}
              >
                펀딩내역조회
              </Link>
            </li>
            <li>
              <Link
                to="/users/:id/donations"
                onMouseEnter={onMouseEnterHanlder}
                onMouseLeave={onMouseLeaveHandler}
              >
                후원내역조회
              </Link>
            </li>
            <li>
              <Link
                to="/users/:id/unregister"
                onMouseEnter={onMouseEnterHanlder}
                onMouseLeave={onMouseLeaveHandler}
              >
                회원탈퇴
              </Link>
            </li>
          </ul>
        </div>
        <div className="myPageContents">
          <Route path="/users/:id/user_info" component={ModifyUserInfoPage} />
          <Route path="/users/:id/fundings" component={FundingListPage} />
          <Route path="/users/:id/donations" component={DonationListPage} />
          <Route path="/users/:id/unregister" component={UnRegisterPage} />
        </div>
      </Router>
    </div>
  );
}

export default MyPage;
