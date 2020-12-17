import { useEffect } from "react";
import { Switch, Route, useHistory } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

import { validateThunk } from "../store/modules/auth/thunks";
import Devs from "../pages/devs";
import Profile from "../pages/profile";
import ProfileChanges from "../pages/profile-changes";
import Home from "../pages/home";

const Routes = () => {
  const dispatch = useDispatch();
  const { isAuth } = useSelector((state) => state);

  const history = useHistory();

  useEffect(() => {
    const token = window.localStorage.getItem("token");
    if (!token) {
      return dispatch(validateThunk(false));
    } else {
      dispatch(validateThunk(true));
      history.push("/profile");
    }
  }, [isAuth, history, dispatch]);

  if (isAuth === false) {
    history.push("/");
    return (
      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
      </Switch>
    );
  }
  if (isAuth === null) {
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
