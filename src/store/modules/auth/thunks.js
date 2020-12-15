import { validate } from "./actions";

export const validateThunk = (auth) => (dispatch, getState) => {
  dispatch(validate(auth));
};
