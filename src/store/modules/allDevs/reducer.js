import { ALL_USERS } from "./actionTypes";

const allDevsReducer = (state = [], action) => {
  switch (action.type) {
    case ALL_USERS:
      const { devs } = action;
      return devs;

    default:
      return state;
  }
};

export default allDevsReducer;
