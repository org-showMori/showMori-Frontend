import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HeaderPage from "../Header/Header";
import PrintPostPage from '../PrintPostPage/PrintPostPage';

import "../../../App.css";
import "../../utils/MediaQuery.css";

import FundingPage from "../FundingPage/FundingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import {MyPage, UnRegister} from "../MyPage/MyPage";
import ModifyUserInfoPage from "../ModifyUserInfoPage/ModifyUserInfoPage";
import FundingListPage from "../FundingListPage/FundingListPage";
import DonationListPage from "../DonationListPage/DonationListPage";


function MainPage() {
  return (
    <Router>
      <HeaderPage />
      <div id="bodyPage">
        <Switch>
          <Route path="/posts" component={PrintPostPage} />
          <Route path="/fundings" component={FundingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/users" component={MyPage} />
          <Route path="/users/:id" component={ModifyUserInfoPage} />
          <Route path="/users/:id/fundings" component={FundingListPage} />
          <Route path="/users/:id/donations" component={DonationListPage} />
          <Route path="/users/:id/unregister" component={UnRegister} />
        </Switch>
      </div>
    </Router>

  );
}

export default MainPage;
