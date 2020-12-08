import { GET_TOKEN } from "./actionsTypes";

const tokenReducer = (state = " ", action) => {
  switch (action.type) {
    case GET_TOKEN:
      const { token } = action;
      return token;

    default:
      return state;
  }
};

export default tokenReducer;
