import React from 'react';
import { Router, Route, Switch } from 'dva/router';
import IndexPage from './routes/IndexPage';
import Principal from "./routes/principal"
function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
        <Route path="/" exact component={IndexPage} />
        <Route path="/principal" component={Principal}></Route>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
