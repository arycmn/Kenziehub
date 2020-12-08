import { Switch, Route } from "react-router-dom";
import Login from "../pages/login";
import SignIn from "../pages/sign-in";

import Profile from "../pages/profile";

const Routes = () => (
  <Switch>
    <Route path="/" exact />
    <Route path="/profile" exact>
      <Profile />
    </Route>
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
