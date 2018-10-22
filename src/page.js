import React from 'react';
import { HashRouter as Router, Route, Switch, Redirect } from 'react-router-dom';
import NotFound from './pages/notFound404/notFound404';
import App from './App';
import Home from './pages/home';

import Login from './pages/login/login'

export default () => (
  <Router>
    <Switch>
      <Route exact path="/" render={() => <Redirect to="/app/home" push />} />
      <Route path="/home" component={Home} />
      <Route path="/login" component={Login} />
      <Route path="/app" component={App} />
      <Route path="/404" component={NotFound} />
      <Route component={NotFound} />
    </Switch>
  </Router>
)
