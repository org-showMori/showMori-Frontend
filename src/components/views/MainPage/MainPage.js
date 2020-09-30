import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HeaderPage from "../Header/Header";
import "../../../App.css";
import "../../utils/MediaQuery.css";
import FundingPage from "../FundingPage/FundingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import PrintPostPage from "../PrintPostPage/PrintPostPage";

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
        </Switch>
      </div>
    </Router>
  );
}

export default MainPage;
