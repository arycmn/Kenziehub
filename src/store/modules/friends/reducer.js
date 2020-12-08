import { ADD_FRIEND, REMOVE_FRIEND } from "./actionsTypes";

const friendsReducer = (state = [], action) => {
  switch (action.type) {
    case ADD_FRIEND:
      const { friend } = action;
      return [...state, friend];

    case REMOVE_FRIEND:
      const newList = state.filter((friend) => friend.id !== action.id);
      return newList;

    default:
      return state;
  }
};

export default friendsReducer;
