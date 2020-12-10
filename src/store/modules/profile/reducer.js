import { GET_PROFILE } from "./actionsType";

const profileReducer = (state = {}, action) => {
  console.log(action);
  switch (action.type) {
    case GET_PROFILE:
      const { profile } = action;
      return profile;

    default:
      return state;
  }
};

export default profileReducer;
