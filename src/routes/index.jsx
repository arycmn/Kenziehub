import { Switch, Route } from "react-router-dom";

import Profile from "../pages/profile";

const Routes = () => (
  <Switch>
    <Route path="/" exact />
    <Route path="/profile" exact component={Profile} />
    <Route path="/login" exact />
    <Route path="/register" exact />
    <Route path="/devs" exact />
  </Switch>
);

export default Routes;
