import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Contacts } from "../pages/Contacts";
import { CreateContact } from "../pages/CreateContact";
import { EditContact } from "../pages/EditContact";
import { NotFound } from "../pages/NotFound";

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Contacts}></Route>
      <Route
        exact
        path="/create"
        component={({ history }) => <CreateContact history={history} />}
      ></Route>
      <Route
        exact
        path="/:contato_id/edit"
        component={({ history, match }) => (
          <EditContact history={history} match={match} />
        )}
      ></Route>
      <Route exact path="/404" render={NotFound}></Route>
      <Route path="*" render={() => <Redirect to="/404" />}></Route>
    </Switch>
  </>
);

export default Routes;
