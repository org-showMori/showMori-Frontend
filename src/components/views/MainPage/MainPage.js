import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HeaderPage from "../Header/Header";
import Banner from '../Banner/Banner';
import PrintPostPage from '../PrintPostPage/PrintPostPage';

import "../../../App.css";
import "../../utils/MediaQuery.css";

import FundingPage from "../FundingPage/FundingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import MyPage from "../MyPage/MyPage";


function MainPage() {
  return (
    <Router>
      <HeaderPage />
      <div id="bodyPage">
        <Switch>
            <Route path="/PrintPostPage" component={PrintPostPage} />
          <Route path="/FundingPage" component={FundingPage} />
          <Route path="/LoginPage" component={LoginPage} />
          <Route path="/RegisterPage" component={RegisterPage} />
          <Route path="/MyPage" componenet={MyPage} />
        </Switch>
      </div>
      <Banner />
      <PrintPostPage />
    </Router>

  );
}

export default MainPage;
