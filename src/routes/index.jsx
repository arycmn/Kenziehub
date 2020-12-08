import { Switch, Route } from "react-router-dom";
import Devs from "../pages/devs";

const Routes = () => (
  <Switch>
    <Route path="/" exact />
    <Route path="/profile" exact />
    <Route path="/login" exact />
    <Route path="/register" exact />
    <Route path="/devs" exact>
      <Devs />
    </Route>
  </Switch>
);

export default Routes;
