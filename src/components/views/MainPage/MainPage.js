import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";

import HeaderPage from "../Header/Header";
import "../../../App.css";
import FundingPage from "../FundingPage/FundingPage";
import LoginPage from "../LoginPage/LoginPage";
import RegisterPage from "../RegisterPage/RegisterPage";
import MainBodyPage from "../MainBodyPage/MainBodyPage";

function MainPage() {
  return (
    <Router>
      <HeaderPage />
      <div id="bodyPage">
        <Switch>
            <Route path="/MainBodyPage" component={MainBodyPage} />
          <Route path="/FundingPage" component={FundingPage} />
          <Route path="/LoginPage" component={LoginPage} />
          <Route path="/RegisterPage" component={RegisterPage} />
        </Switch>
      </div>
    </Router>
  );
}

export default MainPage;
