import { Switch, Route } from "react-router-dom";

import Devs from "../pages/devs";
import Login from "../pages/login";
import SignIn from "../pages/sign-in";
import Profile from "../pages/profile";
import ProfileChanges from "../pages/profile-changes";
import Home from "../pages/home";

const Routes = () => (
  <Switch>
    <Route path="/" exact>
      <Home />
    </Route>
    <Route path="/profile" exact>
      <Profile />
    </Route>

    <Route path="/devs" exact>
      <Devs />
    </Route>

    <Route path="/login" exact>
      <Login />
    </Route>

    <Route path="/register" exact>
      <SignIn />
    </Route>

    <Route path="/profile/settings">
      <ProfileChanges />
    </Route>
  </Switch>
);

export default Routes;
