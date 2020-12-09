import { GET_PROFILE } from "./actionsTypes";

const profileReducer = (state = [], action) => {
  switch (action.type) {
    case GET_PROFILE:
      const { profile } = action;
      return [...state, profile];

    default:
      return state;
  }
};

export default profileReducer;
