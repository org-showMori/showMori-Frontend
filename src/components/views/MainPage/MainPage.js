import React from "react";
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



function MainPage() {
  return (
    <Router>
      <HeaderPage />
      <div id="bodyPage">
        <Switch>
          <Route exact path="/" component={PrintPostPage} />
          <Route path="/posts" component={PrintPostPage} />
          <Route path="/fundings" component={FundingPage} />
          <Route path="/login" component={LoginPage} />
          <Route path="/register" component={RegisterPage} />
          <Route path="/users" component={MyPage} />
          <Route path="/modify-funding" component={ModifyFudingPage} />
        </Switch>
      </div>
    </Router>

  );
}

export default MainPage;
