import React from 'react';
import { Router, Route, Switch ,Redirect} from 'dva/router';
import Login from "./routes/login";

function RouterConfig({ history }) {
  return (
    <Router history={history}>
      <Switch>
      <Route path="/login" exact component={Login} />
        <Redirect from='/' to='/login'/>
      </Switch>
    </Router>
  );
}

export default RouterConfig;
