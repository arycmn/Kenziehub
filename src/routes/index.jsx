import { Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import SignIn from "../pages/sign-in";

const Routes = () => (
  <Switch>
    <Route path="/" exact />
    <Route path="/profile" exact />
    <Route path="/login" exact>
      <Login />
    </Route>
    <Route path="/register" exact>
      <SignIn />
    </Route>
    <Route path="/devs" exact />
  </Switch>
);

export default Routes;
