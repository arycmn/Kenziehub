import { GET_TOKEN } from "./actionsType";

const token = localStorage.getItem("token");

const tokenReducer = (state = token, action) => {
  switch (action.type) {
    case GET_TOKEN:
      const { token } = action;
      return token;

    default:
      return state;
  }
};

export default tokenReducer;
