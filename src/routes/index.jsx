import { Switch, Route } from "react-router-dom";

const Routes = () => (
  <Switch>
    <Route path="/" exact />
    <Route path="/profile" exact />
    <Route path="/login" exact />
    <Route path="/register" exact />
    <Route path="/devs" exact />
  </Switch>
);

export default Routes;
