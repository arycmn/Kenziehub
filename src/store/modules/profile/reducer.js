import { GET_PROFILE } from "./actionsType";

const initialState = () => {
  const initialUser = localStorage.getItem("user");
  if (initialUser) {
    return JSON.parse(initialUser);
  } else {
    return [];
  }
};

const profileReducer = (state = initialState(), action) => {
  switch (action.type) {
    case GET_PROFILE:
      const { profile } = action;
      return profile;

    default:
      return state;
  }
};

export default profileReducer;
