import React from "react";
import { Router, Route, Switch, Redirect } from "dva/router";
import Login from "./routes/login";
import Principal from "./routes/principal";
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/login" exact component={Login} />
        <Route path="/principal" component={Principal}></Route>
        <Redirect from="/" to="/login" />
      </Switch>
    </Router>
  );
}

export default RouterConfig;
