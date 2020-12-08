import { Switch, Route } from "react-router-dom";
import Devs from "../pages/devs";
import Login from "../pages/login";
import SignIn from "../pages/sign-in";

const Routes = () => (
  <Switch>
    <Route path="/" exact />
    <Route path="/profile" exact />
    <Route path="/devs" exact>
      <Devs />
    </Route>
    <Route path="/login" exact>
      <Login />
    </Route>
    <Route path="/register" exact>
      <SignIn />
    </Route>
  </Switch>
);

export default Routes;
