import { GET_DEV } from "./actionTypes";

const devsReducer = (state = [], action) => {
  switch (action.type) {
    case GET_DEV:
      const { dev } = action;
      return [...state, dev];

    default:
      return state;
  }
};

export default devsReducer;
