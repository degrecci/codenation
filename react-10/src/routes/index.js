import React from "react";
import { Switch, Route, Redirect } from "react-router-dom";

import { Contacts } from "../pages/Contacts";
import { NotFound } from "../pages/NotFound";

const Routes = () => (
  <>
    <Switch>
      <Route exact path="/" component={Contacts}></Route>
      <Route exact path="/create" component={<div>Create</div>}></Route>
      <Route exact path="/:contato_id/edit" component={<div>Edit</div>}></Route>
      <Route exact path="/404" render={NotFound}></Route>
      <Route path="*" render={() => <Redirect to="/404" />}></Route>
    </Switch>
  </>
);

export default Routes;
