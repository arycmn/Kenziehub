import { IS_AUTH } from "./actionType";

const validateReducer = (state = null, action) => {
  switch (action.type) {
    case IS_AUTH:
      const { auth } = action;
      return auth;

    default:
      return state;
  }
};

export default validateReducer;
