import { getToken } from "./actions";

export const getTokenThunk = (token) => (dispatch, getState) => {
  dispatch(getToken(token));
};
