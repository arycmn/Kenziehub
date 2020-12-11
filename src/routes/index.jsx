import { useEffect, useState } from "react";
import { Switch, Route, useHistory } from "react-router-dom";

import Devs from "../pages/devs";
import Login from "../pages/login";
import SignIn from "../pages/sign-in";
import Profile from "../pages/profile";
import ProfileChanges from "../pages/profile-changes";
import Home from "../pages/home";

const Routes = () => {
  const [isAuth, setIsAuth] = useState(undefined);
  const history = useHistory();
  console.log(isAuth);

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      return setIsAuth(false);
    } else {
      setIsAuth(true);
      history.push("/profile");
    }
  }, [isAuth, history]);

  if (isAuth === false) {
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>

        <Route path="/login" exact>
          <Login setIsAuth={setIsAuth} />
        </Route>

        <Route path="/register" exact>
          <SignIn />
        </Route>
      </Switch>
    );
  }
  if (isAuth === undefined) {
    return <div>Loading...</div>;
  }

  return (
    <Switch>
      <Route path="/profile" exact>
        <Profile />
      </Route>

      <Route path="/devs" exact>
        <Devs />
      </Route>

      <Route path="/profile/settings">
        <ProfileChanges />
      </Route>
    </Switch>
  );
};

export default Routes;
