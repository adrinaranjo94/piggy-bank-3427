import React from "react";
import { Redirect, Route, Switch } from "react-router-dom";
import TopBar from "../../Components/TopBar";
import { DashboardPage } from "../../Pages/DashboardPage";
import "./styles.css";

const ContentSide = (props) => {
  return (
    <div className="contentSide">
      <TopBar />
      <Switch>
        <Route path="/" exact component={DashboardPage} />
        <Route
          path="/transactions"
          exact
          render={() => <h1>Transactions</h1>}
        />
        <Route
          path="/transactions/:transaction_id"
          render={(props) => (
            <h1>Transaction {props.match.params.transaction_id}</h1>
          )}
        />
        <Route path="/settings" exact render={() => <h1>Settings</h1>} />
        <Redirect to="/" />
      </Switch>
    </div>
  );
};

export default ContentSide;
