import React from 'react';
import { Switch, Route, Redirect, Link } from 'react-router-dom';

import { Home } from '../pages/Home';
import { Thread } from '../pages/Thread';

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Home}></Route>
      <Route
        exact
        path="/thread/:thread_slug"
        component={props => <Thread {...props} />}
      ></Route>
      <Route
        exact
        path="/404"
        render={() => (
          <div>
            <Link to="/" data-test="voltar">
              Voltar
            </Link>
            <h2>Not found!</h2>
          </div>
        )}
      ></Route>
      <Route path="*" render={() => <Redirect to="/404" />}></Route>
    </Switch>
  </>
);

export default Routes;
