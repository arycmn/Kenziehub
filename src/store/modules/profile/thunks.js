import { getProfile } from "./actions";

export const getProfileThunk = (user) => (dispatch, getState) => {
  localStorage.setItem("user", JSON.stringify(user));
  dispatch(getProfile(user));
};
