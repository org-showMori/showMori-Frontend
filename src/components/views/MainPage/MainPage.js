import React, { Suspense } from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";


import "../../../App.css";
import "../../utils/MediaQuery.css";

import HeaderPage from "../Header/Header";
import LandingPage from '../LandingPage/LandingPage';
import PostFundingPage from "../PostFundingPage/PostFundingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import MyPage from "../MyPage/MyPage";
import ModifyFudingPage from "../ModifyFundingPage/ModifyFundingPage";
import DetailFundingPage from "../DetailFundingPage/DetailFundingPage";
import DonationPage from "../DonationPage/DonationPage";



function MainPage() {
  return (
    <Suspense fallback={(<div>Loading...</div>)}>
    <Router>
      <HeaderPage />
      <div id="bodyPage">
        <Switch>
          <Route exact path="/" component={LandingPage} />
          <Route exact path="/posts" component={LandingPage} />
          <Route exact path="/fundings" component={PostFundingPage} />
          <Route exact path="/login" component={LoginPage} />
          <Route exact  path="/register" component={RegisterPage} />
          <Route exact path="/users" component={MyPage} />
          <Route exact path="/modify-funding" component={ModifyFudingPage} />
          <Route 
            exact path="/posts/:post_id/:title/:goalsum/:totalDonation/:deadLine" 
            component={DetailFundingPage} />
          <Route exact path="/posts/donate/:post_id/:selected_date/:selected_money" component={DonationPage} />
        </Switch>
      </div>
    </Router>
    </Suspense>

  );
}

export default MainPage;
