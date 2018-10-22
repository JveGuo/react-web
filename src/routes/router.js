import React, { Component } from 'react';
import { Route, Redirect, Switch } from 'react-router-dom';

import routerConfig from './config';

export default class CRouter extends Component {
  requireLogin = (component) => {
    const { info } = this.props;
    const { name } = info;
    if (!name) {
      return <Redirect to={'/login'} />;
    }
    return component;
  }
  render () {
    return (
      <Route>
        <Switch>
          {
            Object.keys(routerConfig).map(key =>
              routerConfig[key].map(r => {
                const route = r => {
                  const Component = r.component;
                  return (
                    <Route key={r.route || r.key} exact path={r.route || r.key} render={
                      props => r.noLogIn ? <Component {...props} /> : this.requireLogin(<Component {...props} />)
                    } />
                  )
                };
                return r.component ? route(r) : r.subs.map(r => route(r));
              })
            )
          }
          <Route render={() => <Redirect to="/404" />} />
        </Switch>
      </Route>
    )
  }
}