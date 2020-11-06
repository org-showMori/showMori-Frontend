import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import "../../../App.css";
import "../../utils/MediaQuery.css";

import HeaderPage from "../Header/Header";
import PrintPostPage from '../PrintPostPage/PrintPostPage';
import FundingPage from "../FundingPage/FundingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import MyPage from "../MyPage/MyPage";
import ModifyFudingPage from "../ModifyFundingPage/ModifyFundingPage";
import FundingDetailPage from "../FundingDetailPage/FundingDetailPage";
import DonationPage from "../DonationPage/DonationPage";



function MainPage() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
    <Router>
      <HeaderPage />
      <div id="bodyPage">
        <Switch>
          <Route exact path="/" component={PrintPostPage} />
          <Route exact path="/posts" component={PrintPostPage} />
          <Route exact path="/fundings" component={FundingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact  path="/register" component={RegisterPage} />
          <Route exact path="/users" component={MyPage} />
          <Route exact path="/modify-funding" component={ModifyFudingPage} />
          <Route exact path="/posts/:post_id" component={FundingDetailPage} />
          <Route exact path="/posts/:post_id/donate" component={DonationPage} />
        </Switch>
      </div>
    </Router>
    </Suspense>

  );
}

export default MainPage;
